# Magic

Xindeler's magic system is one of the deepest in the game. Every spell is defined by two independent things: a **Source** (where its power comes from) and a **School** (what form its effect takes) — a School isn't tied to one Source, it's a style of effect that different Sources can channel in their own way.

## Magic Sources

Each spell draws on a magic source that defines its origin and nature:

| Source | Description |
|--------|-------------|
| **Arcane** | The magic of the Veil — the fabric of energy that permeates the world |
| **Divine** | Granted by the Luminaries to their faithful followers |
| **Primordial** | The raw force of nature and the elements |
| **Psionic** | The power of the mind over matter |
| **Ki** | Internal energy channeled through the body |

## Schools of Magic

A School describes the *style* a spell's effect takes — direct damage, summoning, deception, and so on — independent of which Source fuels it. The same School can be reached from more than one Source: a Cleric's Evocation and a Mage's Evocation both hit hard and fast, they just draw on different power.

| School | Description |
|---------|-------------|
| **Evocation** | Direct damage, explosions, projectiles |
| **Conjuration** | Summoning |
| **Transmutation** | Transformation and alteration |
| **Abjuration** | Defense and magical negation |
| **Necromancy** | Control and debilitation |
| **Enchantment** | Mental manipulation |
| **Illusion** | Deception and perception |
| **Divination** | Knowledge and information |
| **Axiomancy** | Gravity, time and space — split into two sub-disciplines, one bent toward time and fate, the other toward gravity and mass |
| **Hemomancy** | Blood magic — a forbidden practice, unique to Xindeler |

### Which Sources each School draws on, today

Not every School × Source combination is in use yet — more will open up as new classes ship.

| School | Arcane | Divine | Primordial | Psionic | Ki |
|--------|:---:|:---:|:---:|:---:|:---:|
| Evocation | ✅ | ✅ | — | — | — |
| Conjuration | ✅ | ✅ | ✅ | — | — |
| Transmutation | ✅ | ✅ | ✅ | — | — |
| Abjuration | ✅ | ✅ | ✅ | — | — |
| Necromancy | ✅ | ✅ | — | — | — |
| Enchantment | ✅ | ✅ | — | — | — |
| Divination | ✅ | ✅ | ✅ | — | — |
| Illusion | ✅ | — | — | — | — |
| Axiomancy | ✅ | — | — | — | — |
| Hemomancy | ✅ | — | — | — | — |

> Psionic and Ki don't sit on the School grid at all yet — they're disciplines of their own (Ki notably powers the **Monk**), reserved for classes that work outside the source/school pairing entirely.

> Currently the **Mage** and the **Cleric** are the classes with access to magic. Future classes like Warlock, Druid and Bard will have access to unique combinations of sources and schools.

## How a Spell Is Built

Every spell in Xindeler is defined by three things:

- **One Source** (from the table above) and **one School** — together they place the spell in the game's magic taxonomy and determine what it visually and thematically feels like to cast.
- **A cooldown**, enforced by the server — you can't spam a spell faster than its cooldown allows, regardless of client-side tricks.
- **A caster weapon requirement** — casting a spell requires having the matching weapon type equipped (Tome, Focus, Holy Symbol, Staff or Sceptre; see [Weapons](/gameplay/armas)).

Some spells are further restricted to a specific class — a class's signature spells only work for that class, while more universal, lower-tier spells are available more broadly across casters who share a source/school combination. Naming tends to scale with power: a Paladin's early smites carry punchy, direct names like **Ember Strike**, while the highest-tier spells in the game reach for something more ominous — **Edge of Oblivion** is about as dramatic as it gets.

## How Are Spells Learned?

Spells are learned through class skill trees. Each tree has spells organized by level (0–9), unlockable with skill points.

Caster weapons (Tome, Focus, Holy Symbol, Staff) determine which set of basic spells you have available, while signature spells are exclusive to the class.

### Starter Spells

Three caster weapons ship with a basic attack plus a class-exclusive signature spell:

| Caster Weapon | Basic Attack | Signature Spell | Class |
|----------------|--------------|------------------|-------|
| Tome | Cinderbolt | Shatterburst | Mage |
| Holy Symbol | Dawnmote | Censure | Cleric |
| Focus | Thornspit | Dread Whisper | — |

## The Veil

The Veil is the fabric of arcane energy that permeates the world of Xindeler. It was created by the Luminaries to arm mortals against the threats of the Void. All arcane magic has its origin in it.

> *Deep knowledge of the Veil — its origins, its limits and what threatens it — is one of the great mysteries of Xindeler's lore.*
