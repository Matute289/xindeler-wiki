# Nav: Back-to-Landing Link + Mobile Menu Fix Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix the broken mobile hamburger menu (renders empty due to a CSS containing-block bug) and add a nav link back to the main landing site (`xindeler.com`).

**Architecture:** Two independent, small changes to existing files — no new files, no new components. One is a one-selector CSS fix in `.vitepress/theme/custom.css`; the other is a config-only nav entry added to both locale blocks in `.vitepress/config.mts`.

**Tech Stack:** VitePress 1.6.4, default theme (CSS-only customization, no custom Vue components).

## Global Constraints

- No new custom Vue components — this repo only extends the default VitePress theme via CSS and config (see `CLAUDE.md`: "No custom Vue components — default VitePress theme extended via CSS only").
- Every locale-facing change must be applied to **both** `locales.root` (EN) and `locales.es` (ES) blocks in `.vitepress/config.mts` — this repo's bilingual convention.
- No linter or automated test suite exists in this repo. `npm run build` succeeding is the correctness gate (per `CLAUDE.md`).
- No changes to the `xindeler-web-landing` repo — this plan is wiki-side only.

---

### Task 1: Fix mobile menu — move `backdrop-filter` off `.VPNav`

**Files:**
- Modify: `.vitepress/theme/custom.css:53-57`

**Interfaces:**
- Consumes: none.
- Produces: none — this is a leaf CSS fix with no consumers in later tasks.

**Background:** `.dark .VPNav` currently has `backdrop-filter: blur(12px)`. This makes `.VPNav` a CSS containing block for its `position: fixed` descendants. VitePress's mobile menu overlay (`.VPNavScreen`) is a `position: fixed` sibling of the nav bar, both nested inside `.VPNav` — so the overlay's `top`/`bottom` offsets resolve against `.VPNav`'s ~64px-tall box instead of the viewport, collapsing its computed height to `0px`. This was verified live in a dev server during design: removing `backdrop-filter` from `.VPNav` took the overlay's computed height from `0px` to `838px` (full viewport).

- [ ] **Step 1: Locate the current rule**

Read `.vitepress/theme/custom.css` around line 53. It currently reads:

```css
/* ── Navbar ───────────────────────────────────────────────────────── */
.dark .VPNav {
  border-bottom: 1px solid rgba(212, 160, 23, 0.12);
  backdrop-filter: blur(12px);
}
```

- [ ] **Step 2: Move `backdrop-filter` to `.VPNavBar`**

Replace that block with:

```css
/* ── Navbar ───────────────────────────────────────────────────────── */
.dark .VPNav {
  border-bottom: 1px solid rgba(212, 160, 23, 0.12);
}

.dark .VPNavBar {
  backdrop-filter: blur(12px);
}
```

`.VPNavBar` renders the visible top bar itself and does **not** contain `.VPNavScreen` (the mobile overlay is a sibling under `.VPNav`, not a child of `.VPNavBar`), so this preserves the exact same visual blur without trapping the fixed-position mobile menu.

- [ ] **Step 3: Build to confirm no errors**

Run: `npm run build`
Expected: build completes successfully (exit code 0), same as before the change.

- [ ] **Step 4: Manual verification in dev server**

Run: `npm run dev`, open `http://localhost:5173` in a browser.

- Using the browser's responsive/device-toolbar mode (or an actual phone), narrow the viewport below 768px width.
- Tap the hamburger icon in the top-right.
- Expected: the icon flips to "✕" **and** a full-height menu appears below the bar, showing (in order): the 4 nav links (Guides, Gameplay, Lore, Database), the language switcher, the theme (light/dark) toggle, and the GitHub/Discord icons.
- Confirm the same on a page that has a sidebar (e.g. `/gameplay/clases/`) and on the home page — both should show the full overlay.
- Widen the viewport back above 768px and confirm the top nav bar still shows the blurred background on scroll (no visual regression on desktop).

- [ ] **Step 5: Commit**

```bash
git add .vitepress/theme/custom.css
git commit -m "fix: move navbar blur off .VPNav so mobile menu overlay isn't clipped

backdrop-filter on .VPNav created a containing block for the mobile
menu's position:fixed overlay, collapsing its height to 0. Moving the
blur to .VPNavBar (which doesn't contain the overlay) keeps the same
visual effect without breaking the mobile menu."
```

---

### Task 2: Add back-to-landing nav link

**Files:**
- Modify: `.vitepress/config.mts:23-28` (EN nav array)
- Modify: `.vitepress/config.mts:133-138` (ES nav array)

**Interfaces:**
- Consumes: none.
- Produces: none — this is a leaf config change.

- [ ] **Step 1: Add the link to the EN nav array**

In `.vitepress/config.mts`, the EN `nav` array currently reads:

```ts
        nav: [
          { text: 'Guides', link: '/guias/empezando' },
          { text: 'Gameplay', link: '/gameplay/clases/' },
          { text: 'Lore', link: '/lore/historia' },
          { text: 'Database', link: '/base-de-datos/criaturas' },
        ],
```

Change it to:

```ts
        nav: [
          { text: '← Xindeler.com', link: 'https://xindeler.com' },
          { text: 'Guides', link: '/guias/empezando' },
          { text: 'Gameplay', link: '/gameplay/clases/' },
          { text: 'Lore', link: '/lore/historia' },
          { text: 'Database', link: '/base-de-datos/criaturas' },
        ],
```

- [ ] **Step 2: Add the same link to the ES nav array**

The ES `nav` array currently reads:

```ts
        nav: [
          { text: 'Guías', link: '/es/guias/empezando' },
          { text: 'Gameplay', link: '/es/gameplay/clases/' },
          { text: 'Lore', link: '/es/lore/historia' },
          { text: 'Base de Datos', link: '/es/base-de-datos/criaturas' },
        ],
```

Change it to:

```ts
        nav: [
          { text: '← Xindeler.com', link: 'https://xindeler.com' },
          { text: 'Guías', link: '/es/guias/empezando' },
          { text: 'Gameplay', link: '/es/gameplay/clases/' },
          { text: 'Lore', link: '/es/lore/historia' },
          { text: 'Base de Datos', link: '/es/base-de-datos/criaturas' },
        ],
```

(The label stays `← Xindeler.com` untranslated in both locales — it's a domain name / proper noun, not prose.)

- [ ] **Step 3: Build to confirm no errors**

Run: `npm run build`
Expected: build completes successfully (exit code 0).

- [ ] **Step 4: Manual verification in dev server**

Run: `npm run dev`, open `http://localhost:5173` in a browser.

- Confirm `← Xindeler.com` appears as the first item in the top nav bar, before Guides.
- Click it — confirm it opens `https://xindeler.com` in a **new tab** (VitePress auto-detects the cross-origin link and adds `target="_blank"` plus a small external-link icon; no extra config needed for this).
- Navigate to `http://localhost:5173/es/` and repeat: confirm `← Xindeler.com` is the first nav item and behaves the same way.
- Open the mobile menu (per Task 1's verification) on both locales and confirm `← Xindeler.com` appears as the first item there too.

- [ ] **Step 5: Commit**

```bash
git add .vitepress/config.mts
git commit -m "feat: add back-to-landing nav link (xindeler.com) to both locales"
```

---

## Self-Review Notes

- **Spec coverage:** Task 1 covers the mobile menu fix section of the spec; Task 2 covers the back-to-landing link section, including the agreed label (`← Xindeler.com`) and position (first item, both locales). Testing section of the spec (build + manual dev-server check, both locales, both desktop/mobile) is folded into each task's own verification steps.
- **Placeholders:** none — every step shows exact before/after code or exact commands.
- **Consistency:** the nav link text/URL is identical across both tasks' verification steps and both locale blocks.
