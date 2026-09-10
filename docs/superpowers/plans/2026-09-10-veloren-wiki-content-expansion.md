# Veloren-Derived Content Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand `xindeler-wiki`'s gameplay/systems documentation using `wiki.veloren.net`'s "Getting Started → NPCs" block (9 source pages) as a structural reference, replacing every "Veloren" mention with "Xindeler" and every Veloren-specific fact/name with the real Xindeler equivalent — verified against `xindeler-new-horizon` and `xindeler-design`, never assumed or invented.

**Architecture:** Content-only changes to Markdown pages (no new VitePress components), plus three brand-new pages (`gameplay/armas.md`, `base-de-datos/armaduras.md`, `gameplay/mazmorras.md`) with matching sidebar entries. Every content task touches the same file in both locales (root EN + `es/` mirror) in the same task.

**Tech Stack:** VitePress 1.6.4, Markdown content, no custom Vue components.

## Global Constraints

- **No deploy.** All work happens on a feature branch off `development` (`content/veloren-wiki-integration`), reviewed locally via `npm run dev`, PR'd into `development` only — never touches `main` or a `v*` tag. See `CLAUDE.md` → Branch Workflow.
- **Bilingual**: every content change lands in both the EN root file and its `es/` mirror in the same task, with `/es/` prefixed internal links in the ES file.
- **Never invent lore.** Any proper noun (creature, legendary item, boss, site, dungeon) must come from `xindeler-design`'s existing canon (`lore/45-bestiary/`, `lore/50-relics/`, `lore/80-geography/`, `lore/90-npcs/` — check via `gh api repos/Matute289/xindeler-design/contents/<path>`) or be omitted/left `.badge-secret`. Never port a Veloren-specific proper noun as-is unless the wiki already uses it (Ogre/Cyclops/Troll/Werewolf/Minotaur/Yeti/Oni are already confirmed live in `criaturas.md` — safe to keep).
- **Never publish an unconfirmed mechanical number.** Poise cutoffs, quality-tier materials, crafting stations, weapon/armor stats — anything Task 1 marks UNCONFIRMED ships as a described concept without the specific number, not a guess.
- **Mindflayer → Mind-Eater: resolved AND merged.** `xindeler-new-horizon#290` is merged (confirmed 2026-09-10 by the "Cromatolis - New Horizon" session). Task 7 may name this creature as "Mind-Eater" (EN) / "Devoramentes" (ES) directly — no gate anymore.
- **Dungeons: two confirmed types**, resolved by Matías — story/mission dungeons (COW-14, no spec yet, needs Matías' narrative input) and world-exploration dungeons (COW-13, already fully built in-engine — 12 real dungeons, currently not spawning due to a placement bug being fixed separately in `xindeler-new-horizon`). Task 9 publishes the structure. **Whether to name the 12 real world-dungeons by their inherited Veloren names is an open question for Matías** (they're not D&D-derived, but haven't been through a rebrand pass either) — Task 9 must not assume either way. If naming them, pull stats from `xindeler-new-horizon`'s `assets/common/entity/dungeon/` directly, never `wiki.veloren.net` (balance may differ in this fork).
- **Never publish a spell-name list.** A directory audit of `xindeler-new-horizon`'s spell assets found a large-scale unresolved IP issue (verbatim D&D 5e spell names across hundreds of asset files) — flagged to Matías separately, not this plan's to fix. Task 11 (the new magic-structure section) covers Sources × Schools only, structurally — no specific spell names, ever, regardless of what's "confirmed" to exist in source. This is a hard constraint, not a verification gate.
- `npm run build` succeeding, plus a manual `npm run dev` walkthrough of every touched page (both locales), is the correctness gate — no linter/test suite in this repo.
- Backing research: `docs/superpowers/specs/2026-09-10-veloren-wiki-content-expansion-design.md`.

---

### Task 1: Verify remaining mechanical facts against `xindeler-new-horizon`; fix stale `CLAUDE.md` line

**Files:**
- Create: `docs/superpowers/specs/2026-09-10-veloren-mechanics-verification.md` (working notes, not published to the site)
- Modify: `CLAUDE.md` (Pending Work table)

**Interfaces:**
- Produces: a CONFIRMED/UNCONFIRMED/CHANGED table that Tasks 3-9 and 11 cite by name.

Classes (all 14 confirmed live), races (Danari/Draugr→Gnome/Dhampir rename confirmed live in `assets/voxygen/i18n/en/`), and "no repair cost" (confirmed via CHANGELOG v0.19.0) are already verified — see the design spec, don't re-verify them. This task covers what's still open:

- [ ] **Step 1: Shallow-clone `xindeler-new-horizon`** into a scratch dir (not inside this repo):
```bash
git clone --depth 1 --branch development --filter=blob:none --sparse git@github.com:Matute289/xindeler-new-horizon.git /tmp/nh-verify
cd /tmp/nh-verify
git sparse-checkout set common/src/comp common/src/states assets/voxygen/i18n/en assets/common/items
```
- [ ] **Step 2: Confirm Poise.** Grep `common/src/comp` and `common/src/states` for the interrupt/stagger state machine (search terms: `Poise`, `PoiseState`, `Interrupted`, `Stunned`, `Dazed`, `KnockedDown`). Record: state names as they actually exist (may differ from Veloren's 4 names), and their % cutoffs if defined as constants (may differ from Veloren's 70/50/40/20). If the state machine doesn't match Veloren's model at all, record CHANGED with a one-line description of what Xindeler actually does.
- [ ] **Step 3: Confirm dodge/roll i-frames and blocking.** Grep for `Roll`, `iframe`, `i_frame`, `Block` in `common/src/states`. Record CONFIRMED/UNCONFIRMED/CHANGED per mechanic.
- [ ] **Step 4: Confirm Combat Rating.** Grep for `combat_rating`, `CombatRating` across `common/src`. If found, record the tier/color scheme as it actually exists (not Veloren's).
- [ ] **Step 5: Confirm quality tiers and materials.** Grep `assets/common/items` or wherever item definitions live for a `quality` field (Low/Common/Moderate/High/Epic/Legendary/Artifact or Xindeler's actual tier names) and per-category material names (metal/wood/textile/hide progression). Record the real names — do not assume Veloren's (Bronze→Orichalcum, etc.) carry over unchanged.
- [ ] **Step 6: Confirm crafting stations.** Grep for the station enum/asset names (Anvil, Forge, Loom, etc.) actually used. Record the real list — Xindeler may have renamed, merged, or added stations.
- [ ] **Step 7: Confirm weapon types and armor slots.** Grep `common/src/comp` for the weapon-type enum (Axe/Bow/Hammer/Sceptre/Staff/Sword/+ Dagger/Tome/Focus/Holy Symbol, per `crafteo.md`'s existing claims) and the armor-slot enum (Head/Neck/Shoulders/Chest/Hands/Ring/Belt/Back/Pants/Foot per Veloren's model). Record what actually exists.
- [ ] **Step 8: Write the verification doc** — one table: `Fact | Xindeler source (file:line) | Status (CONFIRMED same as Veloren / CONFIRMED different: <value> / UNCONFIRMED) `. This is the citation source for Tasks 3-9 and 11; if a later task needs a fact not in this table, that task must do its own targeted grep rather than guess.
- [ ] **Step 9: Fix `CLAUDE.md`'s stale Pending Work line.** In the `gameplay/clases/` row of the Pending Work table, replace "4 classes documented; 10+ planned" with "14 classes documented and shipped (see `gameplay/clases/`); skill trees still being fleshed out for barbarian/sorcerer/warlock/bard/paladin/druid/ranger/monk/artificer/blood-slayer."
- [ ] **Step 10: Clean up the scratch clone**: `rm -rf /tmp/nh-verify`.
- [ ] **Step 11: Commit**

```bash
git add docs/superpowers/specs/2026-09-10-veloren-mechanics-verification.md CLAUDE.md
git commit -m "docs: verify remaining Veloren-derived mechanics against xindeler-new-horizon"
```

---

### Task 2: Expand `guias/empezando.md` with HUD/controls/systems content

**Files:**
- Modify: `guias/empezando.md`
- Modify: `es/guias/empezando.md`

**Interfaces:**
- Consumes: Task 1's verification table for any stat/number used.
- Produces: a "Controls & Interface" section other pages can link to.

Current `empezando.md` covers system requirements, download, and a 4-bullet "First Steps" (account, character, world, quests). Add a new `## Controls & Interface` section after the "First Quests" content and before "## Next Steps" (write in Xindeler's own voice — Veloren's wiki text is CC-BY-SA source material to build from, never to copy verbatim):

- [ ] **Step 1: Draft the section (EN)** covering: keybind overview (movement, inventory, map, diary/character sheet, crafting menu, social — describe the menus; only list specific keys if Task 1 confirmed them), the redesigned inventory/bag (tabbed Inventory/Equipment with paperdoll and always-visible stat block — this is CONFIRMED shipped, CHANGELOG v0.22.0), contextual on-screen hints that replaced the four corner buttons (also CONFIRMED, same changelog entry), the map (icons, waypoints), campfires/waypoints (respawn point, persists across sessions), gliding (one short paragraph, cross-link rather than duplicate), a one-line pointer to dungeons/caves that links to `lore/regiones.md` and `base-de-datos/criaturas.md` instead of re-describing them here, merchants & trading, grouping up, and useful commands (only ones Task 1 confirmed exist).
- [ ] **Step 2: Mirror into ES** (`es/guias/empezando.md`), `/es/` prefixed links.
- [ ] **Step 3: Build check** — `npm run build` succeeds.
- [ ] **Step 4: Local review** — `npm run dev`, open `/guias/empezando` and `/es/guias/empezando`, confirm the section renders and links resolve.
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
- Consumes: Task 1's CONFIRMED Poise/dodge/block/Combat Rating facts.

Current file has Energy, Combos, Poise (concept only), Parry, Backstab, and a buffs/debuffs table. Using only CONFIRMED values from Task 1:

- [ ] **Step 1: Add a "Dodge / Roll" subsection** under Core Mechanics (EN), only if Task 1 confirmed the mechanic; describe it qualitatively if the exact behavior is unconfirmed.
- [ ] **Step 2: Expand Poise with its real state tiers**, using Task 1's actual state names/cutoffs — never Veloren's 70/50/40/20 unless Task 1 confirmed Xindeler uses the same numbers.
- [ ] **Step 3: Add a "Stealth" subsection** if Task 1 confirms it as a gear-driven stat, cross-linking to Rogue's backstab mechanic already documented.
- [ ] **Step 4: Add a "Combat Rating" subsection** if Task 1 confirmed it, with Xindeler's real tiers/colors.
- [ ] **Step 5: Mirror into ES** (`es/gameplay/combate.md`).
- [ ] **Step 6: Build check** — `npm run build` succeeds.
- [ ] **Step 7: Commit**

```bash
git add gameplay/combate.md es/gameplay/combate.md
git commit -m "docs: expand combat page with dodge, poise states, stealth, combat rating"
```

---

### Task 4: Enrich `gameplay/crafteo.md` with quality-tier table and crafting stations

**Files:**
- Modify: `gameplay/crafteo.md`
- Modify: `es/gameplay/crafteo.md`

**Interfaces:**
- Consumes: Task 1's CONFIRMED quality-tier/material and crafting-station facts.

- [ ] **Step 1: Add a "Quality Tiers" table** under "## Item Quality" (EN) — rows = Xindeler's real tiers (from Task 1), columns = material name per category (metal/logs/textiles/hide). If unconfirmed, keep the current qualitative description instead of a guessed table.
- [ ] **Step 2: Add a "Crafting Stations" list** under "## How It Works" with Xindeler's real station names from Task 1.
- [ ] **Step 3: Mirror into ES** (`es/gameplay/crafteo.md`).
- [ ] **Step 4: Build check** — `npm run build` succeeds.
- [ ] **Step 5: Commit**

```bash
git add gameplay/crafteo.md es/gameplay/crafteo.md
git commit -m "docs: add quality-tier table and crafting stations to crafting page"
```

---

### Task 5: New page `gameplay/armas.md` — weapon types and modular crafting

**Files:**
- Create: `gameplay/armas.md`
- Create: `es/gameplay/armas.md`
- Modify: `.vitepress/config.mts` (add sidebar entry under `/gameplay/` in both `locales.root` and `locales.es` blocks, and consider a nav link if warranted)

**Interfaces:**
- Consumes: Task 1's CONFIRMED weapon-type list.
- Produces: a page other pages (`combate.md`, `crafteo.md`) can cross-link to for weapon-specific detail.

- [ ] **Step 1: Write `gameplay/armas.md` (EN)** covering: the real weapon types (from Task 1 — expected superset of Axe/Bow/Hammer/Sceptre/Staff/Sword/Dagger/Tome/Focus/Holy Symbol per `crafteo.md`'s existing mentions, confirm don't assume), the modular crafting model (primary + secondary component determine stats — describe the mechanic, don't invent Xindeler-specific component names unless Task 1 found real ones), and a "Legendary Weapons" section listing items from `xindeler-design/lore/50-relics/` (fetch the directory via `gh api repos/Matute289/xindeler-design/contents/lore/50-relics --jq '.[].name'`, pick a handful with an existing lore file, write one atmospheric line each in the same style as `lore/facciones.md`'s faction teasers — name + one evocative sentence, no mechanical stats unless the relic file itself states them as gameplay fact rather than lore).
- [ ] **Step 2: Mirror into ES** (`es/gameplay/armas.md`).
- [ ] **Step 3: Add sidebar entries** in `.vitepress/config.mts` — under the `/gameplay/` sidebar block in both `locales.root` and `locales.es`, add `{ text: 'Weapons', link: '/gameplay/armas' }` (root) / `{ text: 'Armas', link: '/es/gameplay/armas' }` (es), placed near `Combat`/`Crafting`.
- [ ] **Step 4: Build check** — `npm run build` succeeds.
- [ ] **Step 5: Local review** — confirm the new sidebar entry appears and both locale pages render.
- [ ] **Step 6: Commit**

```bash
git add gameplay/armas.md es/gameplay/armas.md .vitepress/config.mts
git commit -m "docs: add weapons page (types, modular crafting, legendary items)"
```

---

### Task 6: New page `base-de-datos/armaduras.md` — armor slots and sets

**Files:**
- Create: `base-de-datos/armaduras.md`
- Create: `es/base-de-datos/armaduras.md`
- Modify: `.vitepress/config.mts` (sidebar entry under `/base-de-datos/` in both locale blocks)

**Interfaces:**
- Consumes: Task 1's CONFIRMED armor-slot list.

- [ ] **Step 1: Write `base-de-datos/armaduras.md` (EN)** with a per-slot × set table (rows = slots from Task 1's confirmed list, e.g. Head/Chest/Hands/Ring/Belt/Back/Pants/Foot; columns = the sets already named in `crafteo.md` — Adventurer/Assassin/Boreal/Cultist/Golemite/Mail — with a short flavor line per set, not per individual piece, to keep the table maintainable). Do not fabricate numeric stat values (armor rating, stun res, etc.) unless Task 1's verification doc confirms real numbers — describe relative strengths qualitatively otherwise (e.g. "Golemite trades mobility for the highest raw armor rating in its tier").
- [ ] **Step 2: Mirror into ES** (`es/base-de-datos/armaduras.md`).
- [ ] **Step 3: Add sidebar entries** in `.vitepress/config.mts` under `/base-de-datos/` in both locale blocks.
- [ ] **Step 4: Build check** — `npm run build` succeeds.
- [ ] **Step 5: Commit**

```bash
git add base-de-datos/armaduras.md es/base-de-datos/armaduras.md .vitepress/config.mts
git commit -m "docs: add armor database page (slots, sets)"
```

---

### Task 7: Restructure `base-de-datos/criaturas.md` with body-plan taxonomy + real canon lore creatures

**Files:**
- Modify: `base-de-datos/criaturas.md`
- Modify: `es/base-de-datos/criaturas.md`

Current structure (Large Humanoids, Medium Quadrupeds, Arthropods/Birds/Crustaceans, Dragons, Golems, Lore Creatures) is a reasonable start. Do not delete existing confirmed content (Ogre/Cyclops/Troll/Werewolf/Minotaur/Yeti/Oni, Dragons, Golems, existing Lore Creatures):

- [ ] **Step 1: Fetch the real bestiary list** from `xindeler-design`: `gh api repos/Matute289/xindeler-design/contents/lore/45-bestiary --jq '.[].name'`. Cross-reference against what's already in `criaturas.md` (False Hydra, Frost Worm, Juvenile Mimic (Ivi) are already there).
- [ ] **Step 2: Add the remaining named entries** (`grethull`, `korrovax`, `nethercrone`, `terrorath`, `titanspawn`, `todesstern-lebensstern`, `eshvane-deathless-hart`, `black-unicorn`, `baby-face-monster`) to the "Lore Creatures" section, one short atmospheric paragraph each (same style as the existing False Hydra entry: name + `.badge-secret` if the design file's content reads as a genuine reveal-risk, or a plain heading if it's simple flavor with no hidden twist — read each design file first via `gh api repos/Matute289/xindeler-design/contents/lore/45-bestiary/<file> --jq '.content' | base64 -d` to judge which treatment fits, then write an original one-paragraph tease, never copy the design file's prose verbatim since that file may contain full reveal-tier detail not meant for the public wiki).
- [ ] **Step 3: Add a "Mind-Eater" entry** (EN) / "Devoramentes" (ES) to the Large Humanoids/bosses list — `xindeler-new-horizon#290` is confirmed merged (2026-09-10), no gate. One line, no more detail than the other entries in that list (Ogre/Cyclops/Troll/etc. get a single list mention, not a paragraph — match that).
- [ ] **Step 4: Adopt body-plan subsections** within "Arthropods, Birds and Crustaceans" (e.g. split into Arthropods / Small Birds / Large Birds) only if Task 1's verification turned up confirmed large-bird-type creatures; otherwise leave the category as one section.
- [ ] **Step 5: Mirror into ES** (`es/base-de-datos/criaturas.md`).
- [ ] **Step 6: Build check** — `npm run build` succeeds.
- [ ] **Step 7: Commit**

```bash
git add base-de-datos/criaturas.md es/base-de-datos/criaturas.md
git commit -m "docs: expand creature database with confirmed canon lore creatures"
```

---

### Task 8: Restructure `base-de-datos/npcs.md` — fill roles/regions, add Common Roles section

**Files:**
- Modify: `base-de-datos/npcs.md`
- Modify: `es/base-de-datos/npcs.md`

- [ ] **Step 1: Fetch NPC design files** for the ~20 blank rows in the existing table: `gh api repos/Matute289/xindeler-design/contents/lore/90-npcs --jq '.[].name'`, then read each corresponding file (`gh api repos/Matute289/xindeler-design/contents/lore/90-npcs/<file> --jq '.content' | base64 -d`) for its **role and region only** — never copy backstory, motivation, or secrets from these files into the public wiki (that's explicitly "revealed progressively in the game" per the page's own existing footer note).
- [ ] **Step 2: Fill the Role/Region columns** for as many of the blank rows as the design files support (leave `—` for any NPC whose design file has no clear public-safe role/region, or that doesn't exist as a file — don't invent one).
- [ ] **Step 3: Add a "Common Roles" section** alongside the existing "NPC Types" section — generic town-role archetypes (Blacksmith, Herbalist, Farmer, Guard, Alchemist, Hunter, etc.), one line each, without inventing named individuals — these describe recurring NPC *types*, distinct from the 26 named lore NPCs already on the page.
- [ ] **Step 4: Mirror into ES** (`es/base-de-datos/npcs.md`).
- [ ] **Step 5: Build check** — `npm run build` succeeds.
- [ ] **Step 6: Commit**

```bash
git add base-de-datos/npcs.md es/base-de-datos/npcs.md
git commit -m "docs: fill NPC roles/regions from canon, add common role archetypes"
```

---

### Task 9: New page `gameplay/mazmorras.md` — dungeons (story vs. world-exploration)

**Files:**
- Create: `gameplay/mazmorras.md`
- Create: `es/gameplay/mazmorras.md`
- Modify: `.vitepress/config.mts` (sidebar entry under `/gameplay/` in both locale blocks)

**Interfaces:**
- Produces: a page `guias/empezando.md`'s dungeons/caves pointer (Task 2) and `lore/regiones.md` can cross-link to.

Matías confirmed two dungeon types exist (2026-09-10): story/mission dungeons and world-exploration dungeons with tier-gated difficulty. Update from the "Cromatolis - New Horizon" session (owns `xindeler-new-horizon` content, 2026-09-10): world-exploration dungeons are **already fully built** in-engine (12 real dungeons: Gnarling, Adlet, Sahagin, Haniwa, Castle, Cultist, Sea Chapel, Terracotta Palace, Dwarven Mine, Troll Cave, Pirate Hideout, Jungle Ruin — real generators/bosses/loot, not placeholders), just not currently spawning due to a placement bug tracked as **COW-13** (fix in progress, separate from this plan). Story/mission dungeons are tracked as **COW-14**, no spec yet — needs Matías' narrative input, not something this task can write.

- [ ] **Step 1: Check whether Matías has confirmed the 12 world-dungeon names stay as-is** (they're inherited from Veloren, not D&D-derived, but haven't been through a rebrand pass — see the design spec's "open question" note). If yes: proceed to name them in Step 3 using `gh api repos/Matute289/xindeler-new-horizon/contents/assets/common/entity/dungeon --jq '.[].name'` for the authoritative current list and per-dungeon stats (never `wiki.veloren.net` — balance may differ in this fork). If not yet confirmed: skip naming instances, describe the category only (Step 3 becomes "describe world-exploration dungeons generically: encountered while exploring, no name-dropping").
- [ ] **Step 2: Read one or two `xindeler-design` files** for story-dungeon tone (role/region/atmosphere only, never bio/motivation/secrets — same rule as Task 8): `gh api repos/Matute289/xindeler-design/contents/lore/80-geography/kalthis/wards --jq '.[].name'`, then a file or two. Story dungeons don't have a wiki-safe list to enumerate yet (COW-14 has no spec) — cross-link to `lore/regiones.md` for region atmosphere rather than naming any instance.
- [ ] **Step 3: Write `gameplay/mazmorras.md` (EN)** with two sections: **"Story Dungeons"** (tied to quests/missions, narrative-driven, atmospheric only, no named instances — COW-14 isn't designed yet) and **"World Dungeons"** (encountered while exploring, gated by a tier/difficulty system — describe the risk model Matías stated: entering above your tier is survivable-but-hard, entering badly under-leveled gets you killed fast rather than blocking entry outright; name the 12 real dungeons only if Step 1 confirmed it's safe to). Do not invent anything Step 1/2 didn't confirm.
- [ ] **Step 4: Cross-link** from `guias/empezando.md`'s dungeons/caves pointer (added in Task 2) to this new page instead of `lore/regiones.md` alone.
- [ ] **Step 5: Mirror into ES** (`es/gameplay/mazmorras.md`).
- [ ] **Step 6: Add sidebar entries** in `.vitepress/config.mts` under `/gameplay/` in both locale blocks, near Combat/Weapons.
- [ ] **Step 7: Build check** — `npm run build` succeeds.
- [ ] **Step 8: Commit**

```bash
git add gameplay/mazmorras.md es/gameplay/mazmorras.md .vitepress/config.mts
git commit -m "docs: add dungeons page (story vs. world-exploration types)"
```

---

### Task 10: Expand `guias/empezando.md`'s dungeons pointer to link Task 9's new page

**Files:**
- Modify: `guias/empezando.md`
- Modify: `es/guias/empezando.md`

**Interfaces:**
- Consumes: Task 9's `gameplay/mazmorras.md` (must exist before this task runs — sequence Task 9 before Task 10, despite the number order, if executed out of plan order).

Task 2 added a one-line pointer from the new "Controls & Interface" section to dungeons/caves content pointing only at `lore/regiones.md` and `base-de-datos/criaturas.md` (written before Task 9's page existed). This is a 2-line fix:

- [ ] **Step 1: Update the pointer line (EN)** to also link `gameplay/mazmorras.md`.
- [ ] **Step 2: Mirror into ES**.
- [ ] **Step 3: Build check** — `npm run build` succeeds.
- [ ] **Step 4: Commit**

```bash
git add guias/empezando.md es/guias/empezando.md
git commit -m "docs: link the new dungeons page from the getting-started guide"
```

---

### Task 11: Expand `gameplay/magia.md` with a Sources × Schools × Spells structure section

**Files:**
- Modify: `gameplay/magia.md`
- Modify: `es/gameplay/magia.md`

Matías' addition (2026-09-10): "habría que agregar una sección para la estructura de Fuente de magia, escuelas y hechizos." **Hard constraint, not a judgment call**: this section describes *structure* only — how a spell is composed (source + school + cooldown, per-class spell pools, caster-weapon-gated starter spells, as already shipped per CHANGELOG v0.19.0) — and must **never** list specific spell names. A directory audit of `xindeler-new-horizon`'s spell assets during this planning pass found a large-scale, unresolved IP problem (many spell names are verbatim D&D 5e terms) that's been flagged to Matías separately and is out of scope for this repo to fix. Do not reference, list, or hint at specific spell names in this task's output, even ones that seem generic-sounding — err toward zero examples rather than picking "safe-looking" ones, since this hasn't been individually vetted per-name.

- [ ] **Step 1: Add a "How a Spell Is Built" section (EN)** to `gameplay/magia.md`, after the existing "Schools of Magic" table and before "How Are Spells Learned?": each spell has one Source (already listed) and one School (already listed); spells are server-authoritative with per-ability cooldowns; casting requires the matching caster weapon type (Tome/Focus/Holy Symbol/Staff, per the existing "How Are Spells Learned?" paragraph); some spells are class-gated (signature spells require the matching class, basic cantrip-tier spells are available more broadly) — this class-gating detail is CONFIRMED via CHANGELOG v0.19.0 ("Caster signature spells now require the matching class"). No spell names anywhere in this section.
- [ ] **Step 2: Mirror into ES** (`es/gameplay/magia.md`).
- [ ] **Step 3: Build check** — `npm run build` succeeds.
- [ ] **Step 4: Self-check**: `grep -i "fireball\|eldritch\|smite\|power word" gameplay/magia.md es/gameplay/magia.md` should return nothing — a cheap tripwire against accidentally naming a D&D-derived spell.
- [ ] **Step 5: Commit**

```bash
git add gameplay/magia.md es/gameplay/magia.md
git commit -m "docs: add spell structure section to magic page (sources/schools, no spell names)"
```

---

### Task 12: Final review pass and PR

**Files:**
- None (verification only)

- [ ] **Step 1: Full build** — `npm run build` from repo root, confirm zero errors/warnings.
- [ ] **Step 2: Local dev server walkthrough** — `npm run dev`, visit every page touched by Tasks 2-11 in both EN and ES, confirm no broken internal links (`cleanUrls: true` means links must match exactly) and all three new pages (`gameplay/armas`, `base-de-datos/armaduras`, `gameplay/mazmorras`) appear correctly in the sidebar of both locales.
- [ ] **Step 3: Grep for stray "Veloren" mentions** introduced by this plan: `grep -rn "Veloren" guias/ gameplay/ base-de-datos/ es/guias/ es/gameplay/ es/base-de-datos/` — every hit must be a pre-existing, intentional mention (e.g. "forked from Veloren" in `empezando.md`'s intro), not something this plan's new content left in by mistake.
- [ ] **Step 4: Grep for "Mindflayer"** (should be absent, or present only if Task 7 confirmed `xindeler-new-horizon#290` merged and used "Mind-Eater"/"Devoramentes" instead): `grep -rin "mindflayer" guias/ gameplay/ base-de-datos/ es/` should return nothing.
- [ ] **Step 5: Grep for D&D-derived spell names** as a final tripwire (same check as Task 11 Step 4, run repo-wide this time): `grep -rin "fireball\|eldritch\|smite\|power word\|meteor swarm" guias/ gameplay/ base-de-datos/ lore/ es/` should return nothing.
- [ ] **Step 6: Open the PR into `development`** (never `main`), summarizing which of Tasks 2-11 landed. Do not merge without Matías' review — this is the checkpoint he explicitly asked for.
