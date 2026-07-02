# Nav: back-to-landing link + mobile menu fix

## Context

Two nav/header issues reported on `xindeler-wiki` (VitePress site, stock default theme, CSS-only customization):

1. No way to navigate from the wiki back to the main landing site (`xindeler.com`).
2. On mobile, tapping the hamburger menu button toggles its icon to "✕" but the menu content does not appear (or appears empty/incomplete) — none of the desktop header's buttons (nav links, language switch, theme toggle, GitHub/Discord) show up.

## Investigation findings

### Mobile menu — root cause confirmed

`.vitepress/theme/custom.css` sets, for dark mode (the site's default):

```css
.dark .VPNav {
  border-bottom: 1px solid rgba(212, 160, 23, 0.12);
  backdrop-filter: blur(12px);
}
```

`backdrop-filter` (like `filter`, `transform`, `will-change: transform`, etc.) establishes a new **containing block** for any `position: fixed` descendant. VitePress's default theme renders the mobile menu overlay (`.VPNavScreen`, `position: fixed`) as a *sibling* of the nav bar (`.VPNavBar`), both nested inside `.VPNav`:

```html
<header class="VPNav">
  <VPNavBar />      <!-- ~64px tall -->
  <VPNavScreen />   <!-- position: fixed; meant to span the viewport -->
</header>
```

Because `.VPNav` now has `backdrop-filter`, it becomes the containing block for `.VPNavScreen`. The overlay's `top`/`bottom` offsets, which were meant to resolve against the viewport, instead resolve against `.VPNav`'s own box — which is only as tall as the nav bar (~64px). This forces the overlay's computed height to `0px`, so it renders empty.

**Verified live in a running dev server** (devtools-style DOM/CSS inspection, since this repo has no automated test harness):
- With `backdrop-filter: blur(12px)` on `.VPNav`: `.VPNavScreen` computed height = `0px` (menu opens invisibly/empty).
- Removing it: computed height = `838px` (full viewport), showing all 4 nav links, language switcher, theme toggle, and social icons.
- Moving the same `backdrop-filter: blur(12px)` from `.VPNav` to `.VPNavBar` instead: computed height = `838px` again, same visual blur preserved on the bar itself, since `.VPNavBar` does not contain `.VPNavScreen`.

### Landing link

No custom Vue components exist in this repo (`.vitepress/theme/index.ts` just re-exports `DefaultTheme` with a CSS import) — matches project convention of extending the default theme via CSS/config only, never custom components. The right way to add an outbound link without breaking that convention is a plain `nav` entry in `themeConfig.nav`. VitePress's built-in `VPLink` component auto-detects cross-origin links and adds `target="_blank" rel="noreferrer"` plus a small external-link icon automatically — no extra code needed.

## Design

### 1. Fix: move `backdrop-filter` off `.VPNav`

In `.vitepress/theme/custom.css`, change:

```css
.dark .VPNav {
  border-bottom: 1px solid rgba(212, 160, 23, 0.12);
  backdrop-filter: blur(12px);
}
```

to:

```css
.dark .VPNav {
  border-bottom: 1px solid rgba(212, 160, 23, 0.12);
}

.dark .VPNavBar {
  backdrop-filter: blur(12px);
}
```

No JS or component changes. No visual regression on desktop (same blur, same element visually occupies the same space) — only the containing-block side effect on the mobile overlay changes.

### 2. Add back-to-landing nav link

In `.vitepress/config.mts`, prepend one entry to **both** locale `nav` arrays:

- EN (`locales.root.themeConfig.nav`): `{ text: '← Xindeler.com', link: 'https://xindeler.com' }`
- ES (`locales.es.themeConfig.nav`): `{ text: '← Xindeler.com', link: 'https://xindeler.com' }` (same label — it's a proper noun/URL, not translated)

Placed as the **first** item, before Guides/Guías, so it reads as "go back to home base" ahead of the wiki's own sections. Opens in a new tab automatically (external domain), with VitePress's default external-link icon appended.

## Testing

- `npm run build` must still succeed (existing CI gate).
- Manual verification in dev server:
  - Desktop: confirm nav bar still shows the blurred background on scroll, new "← Xindeler.com" link appears first and opens `https://xindeler.com` in a new tab.
  - Mobile viewport (or forced `.VPNavScreen` open via devtools, as done during this investigation): confirm the hamburger menu now shows all nav items (including the new link), language switch, theme toggle, and social icons, in both EN and ES locales.

## Out of scope

- No changes to `xindeler-web-landing` (the landing repo) — this is wiki-side only.
- No new custom Vue components — stays within the "CSS/config-only theme" convention documented in this repo's `CLAUDE.md`.
