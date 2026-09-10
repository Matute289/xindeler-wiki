# Veloren-Derived Content Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand `xindeler-wiki`'s gameplay/systems documentation using `wiki.veloren.net`'s "Getting Started → NPCs" block as a structural reference (9 source pages: Getting Started, Combat, Crafting, Weapons, Armor, Items, Exploration, Dungeons, NPCs), replacing every "Veloren" with "Xindeler" and every Veloren-specific fact with the real Xindeler equivalent — verified against `xindeler-new-horizon`, not assumed.

**Architecture:** Content-only changes to existing Markdown pages (no new VitePress components). Every content task touches the same file in both locales (`path/file.md` for EN, `es/path/file.md` for ES) plus the matching sidebar entries in both `locales.root` and `locales.es` blocks of `.vitepress/config.mts` if a new page is created (this plan mostly *expands* existing pages — new pages are called out explicitly where used).

**Tech Stack:** VitePress 1.6.4, Markdown content, no custom Vue components.

## Global Constraints

- **No deploy.** All work happens on a feature branch off `development` (e.g. `content/veloren-wiki-integration`), reviewed locally via `npm run dev`, PR'd into `development` only — never touches `main` or a `v*` tag. See `CLAUDE.md` → Branch Workflow.
- **Bilingual**: every content change lands in both the EN root file and its `es/` mirror in the same task. Internal links in ES files use the `/es/` prefix (existing convention).
- **Editorial policy** (`CLAUDE.md` → "Tease Without Revealing" + Matías's 2026-09-10 note): gameplay mechanics get full detail once confirmed. Anything lore-adjacent (named bosses, named dungeons, named creatures) that can't be confirmed against `xindeler-new-horizon` gets `.badge-secret` treatment or is simply omitted — never invented.
- **No fabricated numbers.** Every stat, percentage, or threshold copied from the Veloren wiki (Poise cutoffs, quality-tier multipliers, combat rating ranges, etc.) must be confirmed against the actual `xindeler-new-horizon` source before publishing. If a task can't confirm a value, it ships the concept without the specific number rather than guessing.
- `npm run build` succeeding is the correctness gate (no linter/test suite in this repo, per `CLAUDE.md`).
- Research backing this plan: `docs/superpowers/specs/2026-09-10-veloren-wiki-content-expansion-design.md` (design doc) and the full page-by-page Veloren wiki notes gathered 2026-09-10 (browser research covering all 9 source pages).

---

### Task 1: Verify Xindeler engine mechanics against `xindeler-new-horizon`

**Files:**
- Create: `docs/superpowers/specs/2026-09-10-veloren-mechanics-verification.md` (working notes — not published to the site, just a checklist of confirmed/unconfirmed facts for later tasks to cite)

**Interfaces:**
- Produces: a table of CONFIRMED vs UNCONFIRMED facts that Tasks 3-6 cite by name (e.g. "Poise cutoffs: CONFIRMED at 70/50/40/20%" or "Poise cutoffs: UNCONFIRMED, ship without exact numbers").

This task has no code changes — it's a research/confirmation pass against the `xindeler-new-horizon` repo (private, has local checkout access or `gh api`/clone). For each item below, check the relevant source (combat/stats crates, `assets/common/` item definitions, bestiary/loot-table configs) and record CONFIRMED (with source file/line) or UNCONFIRMED (ship the concept, not the number) or CHANGED (Xindeler's actual value, if different from Veloren's):

- [ ] **Step 1: Confirm combat constants** — Poise state names/cutoffs (Interrupted/Stunned/Dazed/Knocked Down at 70/50/40/20%), whether Dodge/Roll grants i-frames, whether Blocking/Parry works as described in `combate.md` (already documents Parry — confirm Block is the same underlying mechanic or a separate one), Stealth as a gear-driven stat, Combat Rating tiers/colors/ranges. Search likely locations: `common/src/comp/`, `common/src/states/`, or equivalent — the exact crate layout is whatever `xindeler-new-horizon` actually has, don't assume it matches Veloren's path structure without checking.
- [ ] **Step 2: Confirm quality-tier system** — the 7 tiers (Low/Common/Moderate/High/Epic/Legendary/+Artifact-Debug) and their per-category material names (Bronze→Orichalcum for metal, Wood Log→Eldwood Log for logs, Linen→Sunsilk for textiles, Animal Hide→Dragonscale for hide). `crafteo.md` already implies a color-based quality system without enumerating it — confirm the tier names/materials are unchanged from Veloren (this repo's `crafteo.md` already names Boreal/Cultist/Golemite armor sets, which matches Veloren exactly, so a high prior these tier names carry over too — but confirm, don't assume).
- [ ] **Step 3: Confirm crafting stations & tools** — the 10 stations (Anvil, Cauldron, Cooking Pot, Crafting Bench, Forge, Loom, Repair Bench, Salvaging Bench, Spinning Wheel, Tanning Rack) and the crafting-tool vs. mining-tool distinction. Cross-check against `crafteo.md`'s claim that "items have no repair cost in resources" — if a Repair Bench with material cost exists in the real game files, `crafteo.md` itself may already be stale and need a correction (flag it, don't silently fix it — that's Matías's call).
- [ ] **Step 4: Confirm/deny specific named content** — weapon names beyond the 6 base types + our added dagger/tome/focus/holy-symbol, dungeon names and their bosses, bestiary entries beyond the 6 already confirmed live (Ogre/Cyclops/Troll/Minotaur/Yeti/Oni). For anything NOT found or ambiguous, mark UNCONFIRMED — later tasks must not invent these.
- [ ] **Step 5: Write the verification doc** with a simple table: Fact | Veloren source value | Xindeler status (CONFIRMED same / CONFIRMED different: [value] / UNCONFIRMED) | Source reference.
- [ ] **Step 6: Commit**

```bash
git add docs/superpowers/specs/2026-09-10-veloren-mechanics-verification.md
git commit -m "docs: verify Veloren-derived mechanics against xindeler-new-horizon"
```

---

### Task 2: Expand `guias/empezando.md` with HUD/controls/systems content

**Files:**
- Modify: `guias/empezando.md`
- Modify: `es/guias/empezando.md`

**Interfaces:**
- Consumes: Task 1's verification doc for any stat/number used.
- Produces: a "Controls & Interface" section other pages can link to (e.g. `combate.md` linking back for keybind context).

Current `empezando.md` covers system requirements, download, and a 4-bullet "First Steps" (account, character, world, quests) — it stops well short of Veloren's Getting Started depth. Add a new section after "### 4. First Quests" and before "## Next Steps", titled "## Controls & Interface", covering (adapt wording to Xindeler's own voice, don't translate Veloren's prose verbatim — it's CC-BY-SA source material to build from, not to copy):

- [ ] **Step 1: Draft the "Controls & Interface" section (EN)** covering, at minimum: keybind overview (movement, inventory, map, diary/character sheet, crafting menu, social — use Xindeler's actual default keybinds if confirmed in Task 1, otherwise describe the menus without inventing specific keys), inventory & hotbar basics (equip via double-click, drag to hotbar, bag slots), the map (icons, difficulty indicators, waypoints), campfires/waypoints (respawn point, persists across sessions), gliding (short paragraph — cross-link to a future dedicated page if one exists, don't duplicate `Getting Started`'s full aerodynamics explanation), a short "Dungeons & Caves" paragraph cross-linking to `lore/regiones.md` and `base-de-datos/criaturas.md` rather than re-describing dungeon tiers here, merchants & trading, grouping up, and useful commands (only list commands confirmed to exist in Task 1 — don't invent Xindeler's `/` command set from Veloren's).
- [ ] **Step 2: Mirror the section into ES** (`es/guias/empezando.md`), same content, internal links using `/es/` prefix.
- [ ] **Step 3: Build check** — `npm run build` succeeds.
- [ ] **Step 4: Local review** — `npm run dev`, open `/guias/empezando` and `/es/guias/empezando`, confirm the new section renders and links resolve.
- [ ] **Step 5: Commit**

```bash
git add guias/empezando.md es/guias/empezando.md
git commit -m "docs: expand getting-started guide with controls/interface reference"
```

---

### Task 3: Enrich `gameplay/combate.md` with additional combat mechanics

**Files:**
- Modify: `gameplay/combate.md`
- Modify: `es/gameplay/combate.md`

**Interfaces:**
- Consumes: Task 1's CONFIRMED combat constants (Poise cutoffs, Combat Rating tiers, dodge/block mechanics).

Current file has Energy, Combos, Poise (concept only, no state tiers), Parry, Backstab, and a buffs/debuffs table. Add, only using CONFIRMED values from Task 1:

- [ ] **Step 1: Add a "Dodge / Roll" subsection** under Core Mechanics (EN) — if Task 1 confirms i-frame dodging exists, document it; cross-reference which classes/races interact with it if any (e.g. Elf's movement speed passive, Dhampir's CC resistance already in the table).
- [ ] **Step 2: Expand the Poise subsection with state tiers** — only if Task 1 CONFIRMED the Interrupted/Stunned/Dazed/Knocked Down states and their % cutoffs; otherwise describe the interrupt behavior qualitatively without specific numbers.
- [ ] **Step 3: Add a "Stealth" subsection** if confirmed as a gear-driven stat, cross-linking to Rogue's mobility/backstab mechanics already documented.
- [ ] **Step 4: Add a "Combat Rating" subsection** if confirmed — table of tiers/colors only with Xindeler's actual ranges, not Veloren's copied numbers, unless Task 1 confirms they're identical.
- [ ] **Step 5: Mirror all additions into ES** (`es/gameplay/combate.md`).
- [ ] **Step 6: Build check** — `npm run build` succeeds.
- [ ] **Step 7: Commit**

```bash
git add gameplay/combate.md es/gameplay/combate.md
git commit -m "docs: expand combat page with dodge, poise states, stealth, combat rating"
```

---

### Task 4: Enrich `gameplay/crafteo.md` with the quality-tier table and crafting stations

**Files:**
- Modify: `gameplay/crafteo.md`
- Modify: `es/gameplay/crafteo.md`

**Interfaces:**
- Consumes: Task 1's CONFIRMED quality-tier and crafting-station facts.

- [ ] **Step 1: Add a "Quality Tiers" table** under "## Item Quality" (EN) — 7 rows (Low/Common/Moderate/High/Epic/Legendary/Artifact) × columns (Metal / Logs / Textiles / Hide material name), using Task 1's confirmed material names. If unconfirmed, keep the current qualitative description instead of publishing a guessed table.
- [ ] **Step 2: Add a "Crafting Stations" list** under "## How It Works" — the confirmed station list (e.g. Anvil, Forge, Loom, etc. — using Xindeler's actual names from Task 1, which may differ from Veloren's).
- [ ] **Step 3: Reconcile the "Repair" section** with Task 1's finding — if Xindeler's repair mechanic differs from what's currently written ("no repair cost in resources"), flag the discrepancy in the PR description for Matías rather than silently overwriting it.
- [ ] **Step 4: Mirror into ES** (`es/gameplay/crafteo.md`).
- [ ] **Step 5: Build check** — `npm run build` succeeds.
- [ ] **Step 6: Commit**

```bash
git add gameplay/crafteo.md es/gameplay/crafteo.md
git commit -m "docs: add quality-tier table and crafting stations to crafting page"
```

---

### Task 5: Restructure `base-de-datos/criaturas.md` with body-plan taxonomy

**Files:**
- Modify: `base-de-datos/criaturas.md`
- Modify: `es/base-de-datos/criaturas.md`

**Interfaces:**
- Consumes: Task 1's CONFIRMED/UNCONFIRMED bestiary entries.

Current structure (Large Humanoids, Medium Quadrupeds, Arthropods/Birds/Crustaceans, Dragons, Golems, Lore Creatures) is a reasonable start but coarser than Veloren's. Re-organize without deleting existing confirmed content (Ogre/Cyclops/Troll/Minotaur/Yeti/Oni, the 3 named lore creatures, Dragons, Golems):

- [ ] **Step 1: Adopt the finer taxonomy** as subsections within existing categories — e.g. split "Arthropods, Birds and Crustaceans" into "Arthropods", "Small Birds", "Large Birds" (only if Task 1 confirms Xindeler has large-bird-type creatures like wyverns/rocs — otherwise leave as one section); keep "Medium Quadrupeds" but note it's the largest category per Veloren's structure, so it's fine for it to stay broad.
- [ ] **Step 2: Add only CONFIRMED new entries** to each category from Task 1's findings — never add a Veloren name that Task 1 marked UNCONFIRMED.
- [ ] **Step 3: Mirror into ES** (`es/base-de-datos/criaturas.md`).
- [ ] **Step 4: Build check** — `npm run build` succeeds.
- [ ] **Step 5: Commit**

```bash
git add base-de-datos/criaturas.md es/base-de-datos/criaturas.md
git commit -m "docs: reorganize creature database by body-plan taxonomy"
```

---

### Task 6: Restructure `base-de-datos/npcs.md` with role-archetype section

**Files:**
- Modify: `base-de-datos/npcs.md`
- Modify: `es/base-de-datos/npcs.md`

**Interfaces:**
- Consumes: Task 1's CONFIRMED NPC-role findings (if any — town-role archetypes are more likely to be engine-level and easy to confirm than named bosses).

- [ ] **Step 1: Add a "Common Roles" section** (EN) alongside the existing "NPC Types" section (Merchants/Airship Captains/Quest Givers/Hirelings) — list generic town-role archetypes confirmed to exist (e.g. Blacksmith, Herbalist, Farmer, Guard, Alchemist, Hunter), short one-line description each, without inventing named individuals for them (the 26 named lore NPCs already in the page stay as-is).
- [ ] **Step 2: Mirror into ES** (`es/base-de-datos/npcs.md`).
- [ ] **Step 3: Build check** — `npm run build` succeeds.
- [ ] **Step 4: Commit**

```bash
git add base-de-datos/npcs.md es/base-de-datos/npcs.md
git commit -m "docs: add common NPC role archetypes to npcs page"
```

---

### Task 7: Final local review pass

**Files:**
- None (verification only)

- [ ] **Step 1: Full build** — `npm run build` from repo root, confirm zero errors/warnings.
- [ ] **Step 2: Local dev server** — `npm run dev`, walk every page touched by Tasks 2-6 in both EN and ES, confirm no broken internal links (`cleanUrls: true` means links must match exactly), no leftover "Veloren" mentions (`grep -ri veloren guias/ gameplay/ base-de-datos/ es/guias/ es/gameplay/ es/base-de-datos/` should return nothing new introduced by this plan — pre-existing mentions like "forked from Veloren" in `empezando.md`'s intro paragraph are fine, don't touch those).
- [ ] **Step 3: Open the PR into `development`** (not `main`) per the branch workflow, tag Matías for review — do not merge without his sign-off, and never create a deploy tag from this work.
