# Crafting

Xindeler's crafting system allows you to create weapons, armor, consumables, tools and more from materials gathered in the world.

## How It Works

![The crafting menu](https://cdn.xindeler.com/images/wiki/2026-09-11/guias/menu-de-crafteo.webp)

To craft an item you need:
1. The required **materials** in your inventory
2. A **crafting station** of the corresponding type
3. Having unlocked the **recipe** (some are automatic, others require recipe books)

![Crafting a simple recipe](https://cdn.xindeler.com/images/wiki/2026-09-11/crafteo/ejemplo-receta-crafteo.webp)

## Crafting Stations

![Crafting stations](https://cdn.xindeler.com/images/wiki/2026-09-11/crafteo/banner-estaciones.webp)

There are 10 crafting stations, each covering a different category of recipe:

| Station | Used for | Recipes |
|---------|----------|--------:|
| <img src="https://cdn.xindeler.com/images/wiki/2026-09-11/crafteo/icono-estacion-mesa-de-crafteo.webp" alt="" width="32"> Crafting Bench | General item assembly | 132 |
| <img src="https://cdn.xindeler.com/images/wiki/2026-09-11/crafteo/icono-estacion-yunque.webp" alt="" width="32"> Anvil | Metal weapons and armor | 72 |
| <img src="https://cdn.xindeler.com/images/wiki/2026-09-11/crafteo/icono-estacion-telar.webp" alt="" width="32"> Loom | Weaving cloth from thread | 56 |
| <img src="https://cdn.xindeler.com/images/wiki/2026-09-11/crafteo/icono-estacion-caldero.webp" alt="" width="32"> Cauldron | Potions and alchemical items | 20 |
| <img src="https://cdn.xindeler.com/images/wiki/2026-09-11/crafteo/icono-estacion-forja.webp" alt="" width="32"> Forge | Smelting ore into ingots | 10 |
| <img src="https://cdn.xindeler.com/images/wiki/2026-09-11/crafteo/icono-estacion-olla-de-cocina.webp" alt="" width="32"> Cooking Pot | Food and consumables | 8 |
| <img src="https://cdn.xindeler.com/images/wiki/2026-09-11/crafteo/icono-estacion-rueca.webp" alt="" width="32"> Spinning Wheel | Turning raw fiber into thread | 7 |
| <img src="https://cdn.xindeler.com/images/wiki/2026-09-11/crafteo/icono-estacion-curtidor.webp" alt="" width="32"> Tanning Rack | Curing raw hide into leather | 4 |
| <img src="https://cdn.xindeler.com/images/wiki/2026-09-11/crafteo/icono-estacion-banco-de-reciclaje.webp" alt="" width="32"> Dismantling Bench | Salvaging items back into materials | — (not recipe-based) |
| <img src="https://cdn.xindeler.com/images/wiki/2026-09-11/crafteo/icono-estacion-banco-de-reparacion.webp" alt="" width="32"> Repair Bench | Equipment repair | — (not recipe-based) |

## Categories of Craftable Items

### Weapons
Weapons in Xindeler are **modular**: the materials used determine the final stats of the weapon. Available types include sword, axe, hammer, bow, staff, sceptre, tome, focus and holy symbol. Dagger, shield, spear and blowgun are planned but not craftable yet.

Weapon materials come in two families — metals and woods (see the material table below) — with different properties depending on the source.

### Armor
There is a wide variety of armor sets — Adventurer, Assassin, Boreal, Cultist, Golemite, Leather Plate, among many more — see [Armor](/base-de-datos/armaduras) for the full list. Each set has different class and level requirements. Mail armor works differently from the named sets: instead of a single fixed identity, it scales through the same 6-tier metal ladder as weapons (Bronze through Orichalcum), so its stats depend entirely on which metal you craft it from.

### Consumables and Food
Food grants temporary combat buffs. More complex foods require more ingredients but give better effects.

### Tools and Crafting
Specialized tools for mining, fishing and other gathering activities are also craftable and improve the efficiency of those activities.

### Gliders and Lanterns
Utility items: gliders allow gliding from heights, lanterns illuminate dark areas like caves and dungeons.

## Item Quality

Items have a **quality** system represented by colors. The quality of the final item depends on the materials used: better materials = higher quality.

| Quality | Color |
|---------|-------|
| Low | Grey |
| Common | Light blue |
| Moderate | Green |
| High | Blue |
| Epic | Purple |
| Legendary | Gold |
| Artifact | Orange |

Real material names, by category and tier (confirmed against the game's item data — not every category has a material at every tier):

| Tier | <img src="https://cdn.xindeler.com/images/wiki/2026-09-11/crafteo/icono-material-lingotes.webp" alt="" width="24"> Metal | <img src="https://cdn.xindeler.com/images/wiki/2026-09-11/crafteo/icono-material-troncos.webp" alt="" width="24"> Wood | <img src="https://cdn.xindeler.com/images/wiki/2026-09-11/crafteo/icono-material-textiles.webp" alt="" width="24"> Textile | <img src="https://cdn.xindeler.com/images/wiki/2026-09-11/crafteo/icono-material-cueros.webp" alt="" width="24"> Hide |
|------|-------|------|---------|------|
| Low | Bronze, Tin | Wood | Linen | Animal Hide, Simple Leather |
| Common | Iron | Bamboo | Wool, Cloth Strips | Tough Hide, Thick Leather, Leather Strips |
| Moderate | Steel | Hardwood | Silk | — |
| High | Cobalt | Ironwood | Lifecloth | Leather Troll |
| Epic | Silver, Gold, Bloodsteel | Frostwood | Moonweave | Rugged Hide, Rigid Leather |
| Legendary | Orichalcum | Eldwood | Sunsilk | — |

No material reaches the Artifact tier — that quality is reserved for crafted or unique items, not raw materials.

Raw materials are gathered directly from the world, before they're refined into the tiers above:

<img src="https://cdn.xindeler.com/images/wiki/2026-09-11/crafteo/icono-material-minerales.webp" alt="Ores" width="70"> <img src="https://cdn.xindeler.com/images/wiki/2026-09-11/crafteo/icono-material-gemas.webp" alt="Gems" width="70"> <img src="https://cdn.xindeler.com/images/wiki/2026-09-11/crafteo/icono-material-pieles.webp" alt="Hides" width="70"> <img src="https://cdn.xindeler.com/images/wiki/2026-09-11/crafteo/icono-material-materiales-animales.webp" alt="Animal materials" width="70">

## Repair

Items have no repair cost in resources. You can repair your equipment without economic penalty.

## Inventory

The inventory has **36 slots**, expanded from the original fork version. Some items stack (materials, consumables), others occupy individual slots (weapons, armor).

<p class="wiki-credit">Images on this page are adapted from the <a href="https://wiki.veloren.net">Veloren Wiki</a>, available under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</p>
