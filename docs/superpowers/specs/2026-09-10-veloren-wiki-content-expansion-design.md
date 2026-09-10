# Veloren-derived content expansion — design

## Context

Matías asked for two related workstreams on top of the branch/CI restructuring (see commit `fe137f1` / PR #13):

1. **Audit + update pass**: check what the wiki currently covers, check what's shipped or in progress in `xindeler-new-horizon` (careful of spoilers), and identify what to add/update.
2. **Veloren-wiki integration**: research https://wiki.veloren.net/wiki/Main_Page in depth — specifically the nav block from "Getting Started" through "NPCs" (9 pages: Getting Started, Combat, Crafting, Weapons, Armor, Items, Exploration, Dungeons, NPCs) — and use it as a structural reference to expand our own wiki. Every "Veloren" mention in the source becomes "Xindeler". Nothing outside that block is in scope.

Explicit constraints from Matías:
- **No deploy.** Work happens on a feature branch, gets reviewed, merges to local `development`, gets run with `npm run dev` for him to see and correct — never touches `main` or a `v*` tag.
- **Lore caution**: where source content (Veloren) touches something that might matter for Xindeler's actual lore, leave it in suspense (`.badge-secret` / no specifics) rather than inventing details. Where it's lore-neutral, fill it in rather than leaving a gap.

## Current wiki state (audit)

Full file inventory as of `development` @ `fe137f1`:

- `guias/`: `empezando.md` (install/download + very light "first steps", no HUD/controls/inventory/crafting-menu/map/dungeons content), `creacion-de-personaje.md` (race/class/background overview, equipment restrictions, level 1-60).
- `gameplay/clases/`: 14 classes (warrior, mage, cleric, rogue fully built out; barbarian, sorcerer, warlock, bard, paladin, druid, ranger, monk, artificer, blood-slayer playable but trees still in progress) + `multiclase.md`.
- `gameplay/razas/`: 6 races (human, elf, dwarf, orc, gnome, dhampir) with passive + innate ability table.
- `gameplay/`: `combate.md` (Energy, Combos, Poise, Parry, Backstab, buffs/debuffs table), `magia.md` (5 magic sources × 10 schools), `crafteo.md` (modular weapons, armor sets incl. Boreal/Cultist/Golemite — **already Veloren-derived names, confirmed live**, quality-by-color, no repair cost), `habilidades.md` (skill trees: weapon/general/class/mining), `trasfondos.md` (24 backgrounds, 7 categories).
- `lore/`: `historia.md` (Six Ages), `cosmologia.md`, `panteon.md` (12 Luminaries, 9 Unfaithful), `regiones.md` (11 regions), `facciones.md` (4 detailed + 14 named only).
- `base-de-datos/`: `criaturas.md` (categories: Large Humanoids/bosses [Ogre, Cyclops, Troll, Werewolf, Minotaur, Yeti, Oni — **same names as Veloren's bestiary, confirmed**], Medium Quadrupeds, Arthropods/Birds/Crustaceans, Dragons, Golems, 3 named lore creatures), `npcs.md` (26 named lore NPCs with hidden backstory + 4 generic NPC-type sections: Merchants, Airship Captains, Quest Givers, Hirelings; AURORA roadmap).

Key finding: **Xindeler already keeps a number of Veloren proper nouns unchanged** (Boreal/Cultist/Golemite armor sets, Ogre/Cyclops/Troll/Minotaur/Yeti/Oni bestiary names). This cuts both ways for the integration work below — some Veloren-sourced names are safe to reuse as-is (already confirmed live in our own content), others may not be (see caution notes per page in the research doc). When in doubt, treat it as unconfirmed and flag it rather than assume either way.

Pending gaps already tracked in `CLAUDE.md` (confirmed still open): razas passive/ability tables are sparse, historia.md needs per-age expansion, regiones.md needs per-region subpages, facciones.md needs the other 14 factions, criaturas.md/npcs.md need full per-entry pages, es/ locale needs native-speaker review.

## xindeler-new-horizon status

<!-- TODO: fill in from the dev-status research fork once it returns. Sections to cover: shipped-and-stable (safe to document), in-progress-do-not-reveal (mention existence only), and anything in xindeler-wiki that's now stale vs. the real game. -->

## Veloren wiki research

Full page-by-page notes: see the research fork's output (or re-derive — the 9 pages were fetched live via browser automation on 2026-09-10). Executive summary:

**Portable as-is (engine mechanics, no lore risk):**
- Getting Started's full "First Steps" structure: controls/HUD, inventory & hotbar mechanics, crafting menu basics, map & waypoints/campfires, gliding, dungeons/caves overview, merchants & trading, grouping, useful commands. Our `guias/empezando.md` currently only covers install + a 4-bullet "first steps" — none of this HUD/systems depth exists yet anywhere in our guides.
- Combat mechanics beyond what `combate.md` already has: dodge/roll (with i-frames), explicit blocking mechanic (we only mention Parry), Poise state tiers (Interrupted/Stunned/Dazed/Knocked Down at engine-defined % cutoffs), Stealth as a gear-driven stat, Combat Rating (with its color-tier table) — **all need confirming against the actual xindeler-new-horizon combat crate/config before publishing exact numbers**; the concepts are very likely shared (same engine fork) but cutoffs/values are not to be assumed identical.
- The 7-tier quality system's structural logic (our `crafteo.md` already says "similar to color rating" but doesn't enumerate tiers) and the 10 crafting-station / crafting-tool vs. mining-tool distinction.
- Bestiary taxonomy by body-plan (Arthropod / Biped Large / Bird Small / Bird Large / Fish / Theropod / Plant / Quadruped Low/Medium/Small) and NPC-role taxonomy (Alchemist, Blacksmith, Chef, Farmer, Guard, Herbalist, Hunter, Merchant, Mountaineer, Traveler, Villager) as organizing schemes — our `criaturas.md`/`npcs.md` can adopt this structure to organize existing + new entries without needing new lore.

**Needs verification against the real game before publishing (do not copy 1:1):**
- Specific weapon names/tiers and the exact modular-crafting material table (Elegant Crest / Large Horn / Long Tusk / etc.) — Veloren-specific balance data.
- Named dungeons and their bosses (Gnarling Fortress, Adlet Stronghold, Sahagin Island, Mindflayer's dungeon, etc.) — high lore risk, apply "leave in suspense" policy until confirmed.
- Specific bestiary entries beyond what's already confirmed live in our `criaturas.md` (Phoenix, Cockatrice, Basilisk, Wendigo, Dullahan, Tarasque, Barghest, etc.) — some overlap is already proven (Ogre/Cyclops/Troll/Minotaur/Yeti/Oni), but the rest is unconfirmed.

**Not worth porting:**
- Veloren's own "Exploration" page is a near-empty stub (last edited 2023) — no template value beyond "these are the sub-topics to eventually cover" (biomes, sites, travel).
- Veloren's "weapon = class" design doesn't apply — Xindeler already has its own class system (14 classes, multiclass, backgrounds) that replaces it.

## Decisions

1. **Scope for this pass**: expand `guias/empezando.md` (or split into a new `guias/controles-y-sistemas.md` — TBD in the plan) with the portable HUD/systems content, and enrich `gameplay/combate.md` with the additional combat mechanics — both gated on confirming values against `xindeler-new-horizon` where the plan calls it out.
2. **Bestiary/NPC restructuring**: reorganize `base-de-datos/criaturas.md` and `npcs.md` using the taxonomy schemes above, without inventing new named entries beyond what's already confirmed safe.
3. **Everything flagged "needs verification"**: the plan's tasks that touch these must include an explicit check-against-the-game step before writing copy, and fall back to `.badge-secret` / omission if it can't be confirmed and looks lore-sensitive.
4. **i18n**: every task updates both the EN (root) and ES (`es/`) file, per existing repo convention.
5. **No deploy**: all work happens on a feature branch off `development`, reviewed locally (`npm run dev`), merged to `development` only after Matías signs off. Never touches `main`/tags.
