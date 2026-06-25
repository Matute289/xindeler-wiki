# Xindeler Wiki — CLAUDE.md

## Commands

```bash
npm run dev       # dev server at http://localhost:5173
npm run build     # production build → .vitepress/dist/
npm run preview   # serve the built dist locally
```

No linter or test suite configured. Build success = valid.

---

## Project Context

**Xindeler** is an open-source fantasy MMORPG built on the Veloren engine.

This repo (`Matute289/xindeler-wiki`) is the **public wiki** — the player-facing encyclopedia. Planned URL: `wiki.xindeler.greenmountain.dev` (VPS deploy pending).

### Related repos

| Repo | Visibility | Purpose |
|------|-----------|---------|
| `Matute289/xindeler-design` | **Private** | Source of truth for all lore, game design specs, IP depuration tools |
| `Matute289/xindeler-web-landing` | Public | Landing page (`xindeler.greenmountain.dev`) |
| `Matute289/xindeler` | Public | Game engine (Veloren fork) |
| `Matute289/xindeler-wiki` | Public | This repo — player wiki |

**The wiki is downstream of `xindeler-design`.** Canon lives in the design repo; the wiki shows a curated public view. Never invent lore that contradicts the design repo.

---

## Branch Workflow

- `main` is protected — no direct pushes allowed for contributors
- All changes go through PRs
- PRs require **1 approval** from the repo owner (Matías) before merging
- The owner can bypass protection and push/merge directly when needed
- CI: `.github/workflows/build.yml` runs `npm run build` on every PR (job: `validate`)

---

## Editorial Policy — "Tease Without Revealing"

The wiki is public. The deep lore in `xindeler-design` is private until the game ships.

| Tier | Rule |
|------|------|
| **Gameplay mechanics** | Full detail — stats, skill trees, class descriptions, crafting. All in the public game code. |
| **Lore surface** | Names, domains, region names, faction names, era names. Atmospheric, not factual. |
| **Lore deep** | **Never publish** — specific historical events, Unfaithful identities, Erevos true nature, Swallowed Verses names, villain arcs, faction internal secrets. |

Use `.badge-secret` on things the wiki acknowledges but deliberately won't explain. Use atmospheric blockquotes and quotes to hint at depth without exposing it.

---

## Architecture

VitePress 1.6.4 static site generator. All source content is Markdown; only non-Markdown code is the config and custom CSS.

### Bilingual i18n

Every page exists in **two locales**:
- **English (default):** files at the repo root — e.g. `gameplay/clases/warrior.md`
- **Spanish Latin American:** mirror under `es/` — e.g. `es/gameplay/clases/warrior.md`

When adding or editing a page, **always update both versions**. The sidebar and nav in `.vitepress/config.mts` must also be updated in both locale blocks (`root` and `es`).

Internal links in Spanish pages must use the `/es/` prefix (e.g. `/es/lore/historia`). English pages use root paths (e.g. `/lore/historia`).

### Content structure

```
/
├── index.md                        # Home (EN)
├── guias/                          # Player guides (EN)
│   ├── empezando.md
│   └── creacion-de-personaje.md
├── gameplay/
│   ├── clases/                     # Classes (EN)
│   │   ├── index.md
│   │   ├── warrior.md
│   │   ├── mage.md
│   │   ├── cleric.md
│   │   └── rogue.md
│   ├── razas/                      # Races (EN)
│   │   ├── index.md
│   │   └── human.md, elf.md, dwarf.md, orc.md, danari.md, draugr.md
│   ├── combate.md
│   ├── magia.md
│   ├── crafteo.md
│   └── habilidades.md
├── lore/                           # World lore (EN)
│   ├── historia.md
│   ├── cosmologia.md
│   ├── panteon.md
│   ├── regiones.md
│   └── facciones.md
├── base-de-datos/                  # Game database (EN)
│   ├── criaturas.md
│   └── npcs.md
└── es/                             # Full Spanish mirror (same structure)
```

### Config

`.vitepress/config.mts` — single file with `locales.root` (EN) and `locales.es` (ES) blocks. Each locale has its own `nav` and `sidebar` (keyed by path prefix). The shared `themeConfig` at the top level holds only `siteTitle` and `socialLinks`. Adding a page requires: the `.md` file + sidebar entry in **both** locale blocks.

### Custom theme

`.vitepress/theme/custom.css` — dark fantasy aesthetic:
- Background: `#06060f` (deep navy)
- Accent: `#d4a017` (gold)
- Font: Cinzel (serif) on all headings via Google Fonts

Badge utilities:
- `.badge-completed` — green pill (fully implemented in-game)
- `.badge-wip` — gold pill (work in progress)
- `.badge-secret` — purple pill (exists in canon, not revealed in wiki)

No custom Vue components — default VitePress theme extended via CSS only.

---

## Current Canon State

The wiki reflects this canonical state (June 2026). Always verify against `xindeler-design/lore/10-pantheon/00-index.md` before editing lore pages.

### The Six Ages

| # | Name (EN) | Name (ES) | Notes |
|---|-----------|-----------|-------|
| I | The Worldsong | El Worldsong | Creation era |
| II | The Age of Dawn | La Era del Amanecer | First mortals |
| III | The Rupture | La Ruptura | Details secret |
| IV | The Age of Wonders | La Era de las Maravillas | Floating Cities |
| V | The Great War & The Great Extinction | La Gran Guerra & La Gran Extinción | Collapse |
| **VI** | **The Second Dawn** | **La Segunda Alborada** | **Current era — game takes place here** |

### The Pantheon

**Luminaries — 12 active** (source: `xindeler-design/lore/10-pantheon/10.1-luminaries/`)

| Name | Domain | D&D Slot (internal only) |
|------|--------|--------------------------|
| Solenne, Mother of Dawn | Sun, light, life, agriculture | Pelor |
| Seraine, the Eternal Light | Redemption, mercy, healing | Sarenrae/Raei |
| Aurelle, the Arch-Wright | Art, creation, elves | Corellon |
| Veshtur, the Unbroken Banner | Platinum dragons, oaths, protection | Bahamut |
| Hestdram, the Allhammer | Forge, craftsmanship, hearth, family | Moradin |
| Veradel, the Wild Mother | Nature, seas, storms | Melora |
| Lunere, the Pale Dreamer | Moon, dreams, second sight | Sehanine |
| Vorne, the Storm-Crowned | Sky storms, strength, honest combat | Kord |
| Velora, the Wheel of Years | Time, seasons, luck, crossroads | Avandra |
| Gildmar, the Open Hand | Trade, honest contracts, trust | Erathis |
| Yssira, the Veiled Archivist | Knowledge, magic as pattern, stars | Ioun |
| Nereth, the Silent Gate | Death, fate, winter | Raven Queen (mortal ascended) |

**Unfaithful — 9** (source: `xindeler-design/lore/10-pantheon/10.2-unfaithful/`)

Identities not revealed in the public wiki. Files: `morvaith.md`, `malgor.md`, `ghorvul.md`, `vermathyr.md`, `szorvenn.md`, `xhorvas.md`, `ulthrenn.md`, `skezzeth.md`, `zhessa.md`.

**Destroyed founding gods — 3** (names erased from history, never mentioned in wiki)

### The Veil

The source of all arcane magic in the mortal world. Mention it by name; do not explain its mechanics.

### The Two Moons

- **Phocallis** — the normal moon, associated with Lunere
- **Erevos** — the red moon. Nature and contents: `.badge-secret` only

---

## What Has Been Done

### Initial wiki (June 2025 — commit `baa73af`)
- VitePress 1.6.4 project created at `/Users/mgrinberg/Workspace/WebstormProjects/xindeler-wiki`
- Dark gold fantasy theme (Cinzel font, `#d4a017` gold, `#06060f` background)
- All content sections scaffolded in Spanish:
  - 4 active classes (warrior, mage, cleric, rogue) with skill trees
  - 6 races with passives and lore paragraphs
  - Core mechanics (combat, magic, crafting, skills)
  - Lore pages (historia, cosmologia, panteon, regiones, facciones)
  - Database pages (criaturas, npcs)
  - Player guides (getting started, character creation)
- GitHub Actions CI — build-only, no deploy
- Pushed to `Matute289/xindeler-wiki` (public)

### Pantheon Wave E update (June 2025 — PR #1, commit `fbfcd00`)
- Updated `lore/panteon.md` (ES then EN) to reflect Wave E merges:
  - 12 Luminaries (removed stale/deprecated entries: Toldram, Hestrel, Pell, Maravel, Verdessa)
  - 9 Unfaithful (was 8; Zhessa added as a founding Unfaithful)
  - Clean table without mixed deprecated entries

### i18n + Era VI fix (June 2025 — PR #2, commit `ac74f80`)
- **Era fix:** Separated old combined Era V into two distinct eras:
  - Era V — The Great War & The Great Extinction
  - Era VI — The Second Dawn (current era where the game takes place)
- **i18n:** English as default locale, Spanish Latin American (`es-419`) under `/es/`
  - 26 pages translated to English at root paths
  - 26 Spanish pages mirrored to `es/` with corrected internal links (`/es/...`)
  - VitePress `locales` config with full sidebar / nav / UI labels per language

### Branch protection (June 2025)
- `main` requires PR + 1 approval before merge
- Repo owner has admin bypass (can push/merge directly)
- Force push and branch deletion disabled

---

## Pending Work

### VPS deploy (high priority)
Configure `wiki.xindeler.greenmountain.dev` on the VPS:
- nginx virtual host proxying to the built static files
- rsync CD step in `.github/workflows/build.yml` (triggered on push to `main`)
- VPS: `ssh -i ~/.ssh/id_ed25519 mgrinberg@216.238.126.97`
- See `xindeler-web-landing` deploy setup for reference (`deploy.yml` + rsync)

### Content gaps to fill over time

| Page | Gap |
|------|-----|
| `gameplay/clases/` | 4 classes documented; 10+ planned. Add pages as classes ship in-game. |
| `gameplay/razas/` | 6 races documented; passive/ability tables are sparse. Expand from game data. |
| `lore/historia.md` | Six ages teased. Expand each age section as narrative ships. |
| `lore/panteon.md` | Unfaithful cryptic by design. Reveal as game story progresses. |
| `lore/regiones.md` | 11 regions listed with brief descriptions. Each deserves its own subpage. |
| `lore/facciones.md` | 4 factions described; 14 others listed by name only. |
| `base-de-datos/criaturas.md` | 3 lore creatures highlighted. Full per-creature pages eventually. |
| `base-de-datos/npcs.md` | 26 NPCs listed with no lore. Fill in as AURORA (NPC AI system) ships. |
| `base-de-datos/items/` | Item database — new section when item system ships. |
| `base-de-datos/spells/` | Spell database — new section when magic system is complete. |

### i18n quality
The `es/` locale was machine-translated from English. It should be reviewed by a native Spanish speaker. Priority order: `lore/` pages first, then `gameplay/`, then `guias/`.
