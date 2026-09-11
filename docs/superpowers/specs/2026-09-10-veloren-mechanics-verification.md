# Veloren-derived mechanics — verification against `xindeler-new-horizon`

Working notes, not published to the site. Checked directly against `xindeler-new-horizon`'s `development`
branch (shallow clone, 2026-09-10), not assumed from Veloren's wiki. Already-verified facts (14 classes,
Danari/Draugr→Gnome/Dhampir rename, no-repair-cost) are documented in
`docs/superpowers/specs/2026-09-10-veloren-wiki-content-expansion-design.md` and not repeated here.

| Fact | Xindeler source | Status |
|---|---|---|
| Poise state names (Interrupted/Stunned/Dazed/KnockedDown) | `common/src/comp/poise.rs:60-70` (`enum PoiseState`) | **CONFIRMED same as Veloren** — 4 states, same names. |
| Poise state cutoffs | `common/src/comp/poise.rs:176` (`POISE_THRESHOLDS: [f32; 4] = [50.0, 30.0, 15.0, 5.0]`) | **CONFIRMED different** — absolute thresholds on a base-100 poise pool (Normal >50, Interrupted >30, Stunned >15, Dazed >5, else KnockedDown), not Veloren's 70/50/40/20%. |
| Dodge/roll grants i-frames | `common/src/states/roll.rs:28` ("Affects whether you are immune to various attacks while rolling") | **CONFIRMED** — exists, same concept as Veloren. |
| Explicit Block distinct from Parry | `common/src/states/basic_block.rs` exists as its own state, separate from Parry (already documented in `combate.md`) | **CONFIRMED exists** — don't describe exact mechanics beyond "a separate blocking stance from Parry" without deeper verification. |
| Combat Rating as a player-facing tiered/colored stat (Veloren-style) | `common/src/combat.rs` has a `combat_rating: f32` field used internally in resistance/evasion formulas | **CHANGED / UNCONFIRMED as UI feature** — exists as an internal balance number, not confirmed as a player-visible tiered stat with colors like Veloren's. Do not publish a Combat Rating tier/color table in the wiki. |
| Quality tiers | `common/src/comp/inventory/item/mod.rs:89-98` (`enum Quality`) | **CONFIRMED same as Veloren** — Low (grey), Common (light blue), Moderate (green), High (blue), Epic (purple), Legendary (gold), Artifact (orange), plus a Debug tier (red, not player-facing). |
| Per-tier material names (metal/wood/textile/hide) | Not found in the sparse-checked paths (likely lives in `assets/common/items/` RON data, not Rust) | **UNCONFIRMED** — don't publish a guessed material-name table. |
| Crafting stations (Anvil, Forge, Loom, etc.) | Not found as a Rust enum in the checked paths — likely defined as world-object/sprite data, not source code | **UNCONFIRMED** — keep `crafteo.md`'s existing qualitative description, don't enumerate a station list. |
| Weapon types | `common/src/comp/inventory/item/tool.rs:27-42` (`enum ToolKind`) | **CONFIRMED, and CHANGED from what `crafteo.md` currently says**: implemented today are Sword, Axe, Hammer, Bow, Staff, Sceptre, Tome, Holy Symbol, Focus (9 types). Dagger, Shield, Spear, and Blowgun are explicitly commented `// future weapons` — **not implemented yet**. `crafteo.md` currently lists "dagger" as if already available — needs correcting. |
| Armor slots | `common/src/comp/inventory/slot.rs:91-106` (`enum ArmorSlot`) | **CONFIRMED, more granular than Veloren**: Head, Neck, Shoulders, Chest, Hands, Ring1, Ring2 (two distinct ring slots, not one generic "Rings"), Back, Belt, Legs, Feet, Tabard (not in Veloren's model), Bag1-4 (four bag slots). |

## Consequences for content tasks

- Task 3 (`combate.md`): may document the real Poise thresholds (50/30/15/5, not Veloren's 70/50/40/20%) and dodge/roll i-frames. Must NOT add a Combat Rating tier/color section — not confirmed as a player-facing feature.
- Task 4 (`crafteo.md`): correct the weapon-type list — Dagger is not implemented yet, drop it from "available now" and optionally note it as planned. Do not add a quality-tier material table or a crafting-station list (both unconfirmed) — keep the existing qualitative text.
- Task 5 (`gameplay/armas.md`, weapons page): use the 9 confirmed weapon types only.
- Task 6 (`base-de-datos/armaduras.md`): use the real 12-slot armor table (Head/Neck/Shoulders/Chest/Hands/Ring1/Ring2/Back/Belt/Legs/Feet/Tabard), not Veloren's model.
