# Combat

Xindeler's combat system is real-time, based on active abilities, positioning and status mechanics that create tactical depth.

## Core Mechanics

### Energy
Energy is the primary resource for executing active abilities. It regenerates passively and can be increased with racial passives (Human +3% recovery, Danari +5% maximum) or class abilities.

### Combos
Some abilities require or generate **combo points**. Executing abilities in the correct order maximizes damage and triggers additional effects.

### Poise
The **Poise** system determines when a character can be interrupted. Heavy attacks or sufficient damage accumulation breaks the target's Poise, interrupting their current animation. The Draugr has CC resistance, which indirectly protects their Poise.

### Parry
Blocking at the exact moment of an attack activates a **parry**, which reduces damage to zero and can open counterattack windows. The Warrior has specific abilities to capitalize on parries (DefensiveRiposte).

### Backstab
Attacking an enemy **from behind** grants a precision bonus. The Rogue is the most optimized class to exploit this mechanic, but any class can execute backstabs with correct positioning.

## Buffs and Debuffs

### Positive Buffs (selection)

| Name | Effect |
|--------|--------|
| Regeneration | Recovers health over time |
| Hastened | Increases movement and attack speed |
| Fortitude | Increases damage reduction (Dwarf's Stoneblood) |
| Frenzied | Increases attack damage |
| Lifesteal | Steals percentage of damage as health |
| Invulnerability | Temporary immunity to damage |
| Fury | Increases critical damage |
| Berserk | Berserker mode: increased damage, reduced defense |

### Debuffs (selection)

| Name | Effect |
|--------|--------|
| Burning | Fire damage over time |
| Bleeding | Bleed damage over time |
| Frozen | Severe slow or immobilization |
| Crippled | Movement speed slow |
| Poisoned | Poison damage over time |
| Terrified | Flight, unable to attack (Mage effect) |
| Charmed | Does not attack the caster (Cleric effect) |

## Projectiles and Area of Effect

Projectiles have server-validated cooldowns — it is not possible to fire faster than the server allows. Area attacks have precise and visible telegraphed hitboxes.

## Death and Respawn

Upon death, the character respawns at the nearest spawn point. There is no permanent loss of items or levels.
