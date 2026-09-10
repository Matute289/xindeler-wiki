# Veloren-derived content expansion — design

## Context

Matías asked for two related workstreams on top of the branch/CI restructuring (see commit `fe137f1` / PR #13):

1. **Audit + update pass**: check what the wiki currently covers, check what's shipped or in progress in `xindeler-new-horizon` (careful of spoilers), and identify what to add/update.
2. **Veloren-wiki integration**: research https://wiki.veloren.net/wiki/Main_Page in depth — specifically the nav block from "Getting Started" through "NPCs" (9 pages: Getting Started, Combat, Crafting, Weapons, Armor, Items, Exploration, Dungeons, NPCs) — and use it as a structural reference to expand our own wiki. Every "Veloren" mention in the source becomes "Xindeler". Nothing outside that block is in scope.

Explicit constraints from Matías:
- **No deploy.** Work happens on a feature branch, gets reviewed, merges to local `development`, gets run with `npm run dev` for him to see and correct — never touches `main` or a `v*` tag.
- **Lore caution**: where source content (Veloren) touches something that might matter for Xindeler's actual lore, leave it in suspense (`.badge-secret` / no specifics) rather than inventing details. Where it's lore-neutral, fill it in rather than leaving a gap.

**Note on provenance:** this spec was consolidated from two independent passes done in parallel (one audited the current wiki + Veloren wiki structurally, the other verified facts directly against `xindeler-design` and `xindeler-new-horizon`'s actual source). One of those passes overstepped its assigned scope (it committed and opened a PR unprompted); its factual content was reviewed and is sound, and is folded in here. Everything below has been re-verified, nothing is taken on faith.

## Current wiki state (audit)

Full file inventory as of `development` @ `fe137f1`:

- `guias/`: `empezando.md` (install/download + very light "first steps", no HUD/controls/inventory/crafting-menu/map/dungeons content), `creacion-de-personaje.md` (race/class/background overview, equipment restrictions, level 1-60).
- `gameplay/clases/`: 14 classes (warrior, mage, cleric, rogue fully built out; barbarian, sorcerer, warlock, bard, paladin, druid, ranger, monk, artificer, blood-slayer playable but trees still in progress) + `multiclase.md`.
- `gameplay/razas/`: 6 races (human, elf, dwarf, orc, gnome, dhampir) with passive + innate ability table.
- `gameplay/`: `combate.md` (Energy, Combos, Poise, Parry, Backstab, buffs/debuffs table), `magia.md` (5 magic sources × 10 schools), `crafteo.md` (modular weapons, armor sets incl. Boreal/Cultist/Golemite, quality-by-color, no repair cost), `habilidades.md` (skill trees: weapon/general/class/mining), `trasfondos.md` (24 backgrounds, 7 categories).
- `lore/`: `historia.md` (Six Ages), `cosmologia.md`, `panteon.md` (12 Luminaries, 9 Unfaithful), `regiones.md` (11 regions), `facciones.md` (4 detailed + 14 named only).
- `base-de-datos/`: `criaturas.md` (categories: Large Humanoids/bosses, Medium Quadrupeds, Arthropods/Birds/Crustaceans, Dragons, Golems, 3 named lore creatures — False Hydra, Juvenile Mimic (Ivi), Frost Worm, all with `.badge-secret`/atmospheric treatment), `npcs.md` (26 named lore NPCs with hidden backstory + 4 generic NPC-type sections: Merchants, Airship Captains, Quest Givers, Hirelings; AURORA roadmap).

Pending gaps already tracked in `CLAUDE.md` (confirmed still open): razas passive/ability tables are sparse, historia.md needs per-age expansion, regiones.md needs per-region subpages, facciones.md needs the other 14 factions, criaturas.md/npcs.md need full per-entry pages, es/ locale needs native-speaker review. `CLAUDE.md`'s "4 classes" note under Pending Work is now stale — 14 classes already shipped (PR #10) — fix this line as part of this pass.

## xindeler-new-horizon status (verified directly against source, 2026-09-10)

Checked via `gh api` (commit history, CHANGELOG.md) and a shallow clone of `development` (grepped `common/src/comp/`, `assets/voxygen/i18n/en/`) — not assumed, not taken from a changelog blurb alone.

**Shipped and safe to document / update:**
- All 14 classes (Warrior, Mage, Cleric, Rogue, Barbarian, Sorcerer, Warlock, Bard, Paladin, Druid, Ranger, Monk, Artificer, Blood Slayer) exist as real `ClassKind` variants in `common/src/comp/class.rs` — the wiki's class list is accurate, not aspirational.
- Race rename **Danari→Gnome / Draugr→Dhampir already confirmed correct**: the Rust enum keeps the old internal identifiers (`Species::Danari`, `Species::Draugr` — code-level, low-churn, not player-visible), but the actual player-facing localization strings (`assets/voxygen/i18n/en/common.ftl`, `name.ftl`) already say `Gnome` / `Dhampir`. The wiki's PR #11 rename matches what players actually see in-game. No further action needed here.
- `crafteo.md`'s "no repair cost in resources" claim is confirmed accurate — CHANGELOG v0.19.0: "Repairing items no longer costs resources."
- Recent releases (v0.19.0 → v0.26.0) shipped: character leveling (1–60) with nameplate display, level/race/class equip gating, a 4-step character creation wizard, class starter kits/outfits, spell system (source × school, per-ability cooldowns, spell compendium), 2FA login, Discord/Google OAuth, admin kick/ban/lookup via `/ui_api/v1`, a complete inventory/bag redesign (tabbed Inventory/Equipment with paperdoll, contextual on-screen hints replacing the old 4 corner buttons), and a "Big Screen" mandatory-read announcement overlay for server operators. All engine/UI-level, safe to mention as shipped features if `guias/empezando.md` gets a systems/interface section (Task 2 below) — none of this is lore-sensitive.
- Active, ongoing **IP-cleanup work** (visible in recent commits): Windows/Linux app icon and taskbar/dock identification switched from the Veloren "V" to a Xindeler "X" (Sept 6-9), cross-platform signed client releases now live for Linux x64/ARM64, macOS ARM/Intel, Windows x64 (v0.25-v0.26). This is infrastructure, not wiki content, but explains why some in-code identifiers still say "Veloren" in places nobody's gotten to yet — it's a known, incremental effort, not neglect.

**Needs a decision from Matías before publishing (do not resolve unilaterally):**
- The dungeon boss **"Mindflayer" is still the literal live in-game name** (`assets/voxygen/i18n/en/name.ftl:610-612`, `noun.ftl:23` — unchanged from Veloren). `xindeler-design`'s own IP-cleanup docs (`imports/2026-06-21-deity-creature-mapping.md`) already list a canon replacement — **"the Mind-Eaters"** — for this exact D&D-derived term ("illithid"/mind flayer is Product Identity), but that rename **has not shipped in the engine yet**. Publishing either name in the wiki right now is premature: "Mindflayer" is what players currently see but is flagged for removal; "the Mind-Eaters" is canon but not yet live. **Recommendation: don't name this specific boss in the wiki yet.** Flag for Matías — revisit once the engine-side rename ships.

**In progress, not for the wiki yet (mentioned for completeness, no specifics below):** nothing found in the reviewed window (commits, CHANGELOG, class/race source) that constitutes an unshipped content spoiler beyond the Mindflayer naming question above — the recent work is overwhelmingly infra/UI/IP-cleanup, not new unreleased game content. No further caution needed beyond the Mindflayer item.

## Canon names already coined in `xindeler-design` (use these, never invent over them)

Verified via `gh api` against the private `xindeler-design` repo — this is the actual source of truth the wiki must never contradict (per `CLAUDE.md`). Relevant for the "don't invent lore" principle in the plan below:

- `lore/45-bestiary/` already has named creatures **not yet used in the wiki**: `grethull`, `korrovax`, `nethercrone`, `terrorath`, `titanspawn`, `todesstern-lebensstern`, `eshvane-deathless-hart`, `black-unicorn`, `baby-face-monster` (alongside `false-hydra`, `frost-worm`, `juvenile-mimic-ivi`, which the wiki already uses). These are candidates to expand `criaturas.md`'s "Lore Creatures" section with the same `.badge-secret` treatment False Hydra already gets — real canon, not invented, and already vetted as "safe to tease."
- `lore/50-relics/` has real named legendary items (`frostbane`, `ruination`, `tempestcleave`, `wailmaul`, `the-veilbinder-staff`, etc.) — **these are the names to use** for any "legendary weapons" content a Weapons page adds, never Veloren's borrowed mythology names (Caladbolg, Mjolnir, Laevateinn).
- `lore/90-npcs/` matches `base-de-datos/npcs.md`'s existing name list 1:1 (Acaelus Thorne, Aldovane, Toldek → design canon spells it "Torin Hammergrim", etc.) — the wiki already has the right names, it just needs roles/regions filled in for the many blank rows.
- `lore/80-geography/` matches `lore/regiones.md`'s region names, plus a `kalthis/wards/.../undercity.md` structure suggesting Xindeler models dungeon-like spaces as narrative **wards inside cities**, not a generic Veloren-style dungeon tier list. Don't force Veloren's flat "Dungeons" hub structure onto this — see Task 8 below.
- `lore/70-style-guide.md` (IP rules): D&D/Critical Role-coined names are forbidden in-world and must be replaced by coined Xindeler names (canon-lint enforced); Lovecraft and other public-domain mythology (Dagon, Cthulhu, King in Yellow, etc.) are explicitly **permitted as-is**. Applied to Veloren's dungeon-boss roster: "Minotaur"/"Cyclops"/"Jiangshi"/"Dagon" are generic public-domain creature types, not proper-noun bosses to port — safe to use as a *creature type* if genuinely needed, never as an invented named boss without checking `45-bestiary/` first.

**Operative rule for all content tasks below:** before naming any boss, legendary item, dungeon, or site, grep `xindeler-design`'s `lore/45-bestiary/`, `50-relics/`, `80-geography/`, `90-npcs/` first. If it exists, use the real name. If it doesn't exist and the content is purely mechanical (no proper noun needed), write it without inventing one. If it would require coining new lore, leave it `.badge-secret`.

## Veloren wiki research (full inventory)

9 hub pages fetched live via browser automation, 2026-09-10 (WebFetch returns 403 against this site — needs a real browser). Executive summary:

**Portable as-is (engine mechanics, no lore risk):**
- Getting Started's full "First Steps" structure: controls/HUD, inventory & hotbar mechanics, crafting menu basics, map & waypoints/campfires, gliding, dungeons/caves overview, merchants & trading, grouping, useful commands. Our `guias/empezando.md` currently only covers install + a 4-bullet "first steps" — none of this HUD/systems depth exists yet anywhere in our guides.
- Combat mechanics beyond what `combate.md` already has: dodge/roll (with i-frames), explicit blocking mechanic (we only mention Parry), Poise state tiers (Interrupted/Stunned/Dazed/Knocked Down at engine-defined % cutoffs: 70/50/40/20 in Veloren), Stealth as a gear-driven stat, Combat Rating (with its color-tier table).
- The 7-tier quality system (Low/Common/Moderate/High/Epic/Legendary/Artifact) with per-category material names (metal/logs/textiles/hide), and the 10 named crafting stations (Anvil, Cauldron, Cooking Pot, Crafting Bench, Forge, Loom, Repair Bench, Salvaging Bench, Spinning Wheel, Tanning Rack) plus the crafting-tool vs. mining-tool distinction.
- Weapons: 6 base weapon types (Axe, Bow, Hammer, Sceptre, Staff, Sword) + modular crafting (primary + secondary component, each independently named) + 6 "animal material" components with per-weapon-type buffs/debuffs + combinatorial naming (Greataxe, Poleaxe, Zweihander, Katana per component combo). Structural system is portable; the flavor names of components/combos and any "legendary" weapon needs Xindeler's own naming (see canon section above).
- Armor: a slot × set stat table (Head/Neck/Shoulders/Chest/Hands/Ring/Belt/Back/Pants/Foot × Armor/Stun Res/Max Energy/Energy Reward/Crit Power/Stealth/Obtained Via/Quality) is a strong reusable template — our `crafteo.md` already names Adventurer/Assassin/Boreal/Cultist/Golemite/Mail sets, this just needs a proper per-slot table.
- Bestiary taxonomy by body-plan (Arthropod / Biped Large / Bird Small / Bird Large / Fish / Theropod / Plant / Quadruped Low/Medium/Small) and NPC-role taxonomy (Alchemist, Blacksmith, Chef, Farmer, Guard, Herbalist, Hunter, Merchant, Mountaineer, Traveler, Villager) as organizing schemes — `criaturas.md`/`npcs.md` can adopt this structure without needing new lore.
- Travel/Exploration: waypoint/campfire mechanics, gliding physics (angle of attack, terminal velocity — real engine numbers cited from source in Veloren's own wiki), mount taming and stats.

**Needs verification / lore caution before publishing (do not copy 1:1):**
- Specific weapon component names/materials (Elegant Crest, Large Horn, etc.) — Veloren-specific balance data and flavor, not automatically ours.
- Named dungeons and their bosses (Gnarling Fortress, Adlet Stronghold, Sahagin Island, Vampire Castle, the Mindflayer's dungeon, etc.) — high lore risk. Per the canon findings above, Xindeler models this space differently (narrative wards, not flat dungeon tiers) — needs Matías' call on whether/how to expose any of this structure at all (Task 8 is a proposal-only task, not a publish task, for this reason).
- Specific bestiary entries beyond what's already confirmed live in our `criaturas.md` (Ogre/Cyclops/Troll/Werewolf/Minotaur/Yeti/Oni are already there and safe) — anything further should come from `xindeler-design/lore/45-bestiary/` (see canon section), never invented or copied from Veloren's own named bosses.
- "Sites" (~23 minor points of interest with 1-2 lines of flavor each) — good template for a future `lore/regiones.md` subsection, but needs real Xindeler site names, not Veloren's (Airship Crashsite, Witch Hut, etc. are Veloren-specific).

**Not worth porting:**
- Veloren's own "Exploration" sub-pages (Biomes & bestiary, Caves & bestiary, Giant Trees, Castle) are near-empty stubs — no template value.
- Veloren's "Items" page is a pure hub with no content of its own — doesn't need a Xindeler equivalent page.
- Veloren's "weapon = class" design doesn't apply — Xindeler already has its own 14-class system that replaces it; a Weapons page here is about crafting/stats, not build identity.

## Page mapping

| Veloren source | Xindeler target | Action |
|---|---|---|
| Getting Started | `guias/empezando.md` | Expand: controls/HUD, inventory/hotbar, map/waypoints, gliding, merchants, grouping, commands. |
| Combat | `gameplay/combate.md` | Expand: dodge/roll, Poise state tiers, Stealth, Combat Rating. |
| Crafting | `gameplay/crafteo.md` | Expand: quality-tier table, named crafting stations. |
| Weapons | *new* `gameplay/armas.md` | New: weapon types, modular crafting, legendary items using real `xindeler-design/lore/50-relics/` names. |
| Armor | *new* `base-de-datos/armaduras.md` | New: per-slot × set stat table, using sets already named in `crafteo.md`. |
| Items | — | No dedicated page needed (hub-only in source too). |
| Exploration | `guias/empezando.md` (waypoints/gliding) + `lore/regiones.md` (sites, atmospheric only) | Split: mechanics to guides, atmosphere-only sites to lore. |
| Dungeons | *proposal only*, no publish | Xindeler's ward-based model differs structurally — flag for Matías' design call, don't build a Veloren-style tiered dungeon page without his sign-off. |
| NPCs | `base-de-datos/npcs.md` | Fill roles/regions for existing named NPCs (using `xindeler-design/lore/90-npcs/`, roles/region only, never bio/motivation) + add a generic "Common Roles" section for town archetypes. |

## Decisions

1. **Scope for this pass**: expand `guias/empezando.md` and `gameplay/combate.md` and `gameplay/crafteo.md`; add two new pages (`gameplay/armas.md`, `base-de-datos/armaduras.md`); restructure `base-de-datos/criaturas.md` and `npcs.md`. Dungeons content is a proposal-only deliverable pending Matías' design call.
2. **Never invent names.** Every proper noun (creature, item, boss, site) must trace to `xindeler-design`'s existing canon or be omitted/left `.badge-secret`. Every mechanical number/tier copied from Veloren must be flagged if not independently confirmed against `xindeler-new-horizon` source (as done above for classes/races/repair — the pattern to repeat for anything not yet checked).
3. **The Mindflayer naming question is Matías' call**, not something to resolve silently — flagged above, don't publish either name until he decides.
4. **i18n**: every task updates both the EN (root) and ES (`es/`) file, per existing repo convention, plus sidebar entries in both `.vitepress/config.mts` locale blocks for new pages.
5. **No deploy**: all work happens on a feature branch off `development`, reviewed locally (`npm run dev`), merged to `development` only after Matías signs off. Never touches `main`/tags.
6. **CLAUDE.md housekeeping**: fix the stale "4 classes" line under Pending Work while touching this area (Task 1).
