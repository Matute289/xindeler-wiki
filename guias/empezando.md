# Getting Started

Xindeler is an open-source MMORPG built in Rust, forked from Veloren and evolving toward its own persistent world. This guide takes you from download to your first adventure.

## System Requirements

| | Minimum | Recommended |
|---|---|---|
| **OS** | Windows 10 / Linux / macOS 12+ | Windows 11 / Linux (latest LTS) |
| **CPU** | 4 cores, 2.5 GHz | 6+ cores, 3.5 GHz |
| **RAM** | 8 GB | 16 GB |
| **GPU** | Vulkan / Metal compatible | Dedicated GPU with 4 GB VRAM |
| **Storage** | 4 GB | 8 GB (SSD recommended) |
| **Network** | 5 Mbps | 20 Mbps |

## Download

Download the latest version from the [Downloads](https://xindeler.com#download) section of the official website.

Versions are available for:
- **Windows** — x86_64 only (no ARM64 build yet)
- **Linux** — x86_64 and ARM64
- **macOS** — x86_64 and Apple Silicon (ARM64)

> A native launcher is available for each architecture, handling installation and updates automatically.

## First Steps

### 1. Create an Account

When launching the client for the first time, you will be asked to create an account. Native username/password login is available, along with Discord and Google OAuth, and optional two-factor authentication (2FA/TOTP) for extra account security.

### 2. Create Your Character

Choose your [race](/gameplay/razas/) and your [class](/gameplay/clases/). Each combination has a different playstyle.

Some tips for new players:
- **Warrior + Dwarf** — a tough combination, ideal for learning the combat system.
- **Mage + Elf** — high movement speed and powerful magic, harder to master.
- **Cleric + Human** — versatile, able to sustain and heal, good for group play.
- **Rogue + Gnome** — precision damage and extreme mobility, for experienced players.

### 3. The World

Xindeler is a vast world with procedurally generated biomes, sites and dungeons. Exploration is part of the game: you will find villages, ruins, caves and creatures in every region.

### 4. First Quests

Upon arriving in the world you will find NPCs in nearby villages who offer starting quests: gathering, exploration and combat. They are the best way to learn the basic systems and get your first equipment.

## Controls & Interface

### Default Keybinds

| Action | Default |
|--------|---------|
| Move forward / left / back / right | W / A / S / D |
| Jump | Space |
| Roll / dodge | Mouse Middle-click (macOS: Shift) |
| Sneak | Shift |
| Glide | Ctrl |
| Attack Primary | Mouse Left |
| Attack Secondary / block-aim | Mouse Right |
| Block | Alt |
| Interact | E |
| Toggle weapon / wield | R |
| Mount | F |
| Toggle lantern | G |
| Inventory | I |
| Character menu (Diary) | P |
| Map | M |
| Crafting | C |
| Social | O |
| Trade | T |
| Chat | Enter |
| Command mode | / |
| Auto-walk | . |
| Sit | K |
| Hotbar slots 1–10 | 1–9, Q |
| Swap loadout | Tab |
| Screenshot | F4 |

All of these are rebindable in the settings menu.

### Useful Commands

Chat commands you can use without any admin/moderator role:

| Command | What it does |
|---------|--------------|
| `/say` (`/s`) | Local chat |
| `/region` (`/r`) | Region chat |
| `/world` (`/w`) | World chat |
| `/faction` (`/f`) | Faction chat |
| `/group` (`/g`) | Group chat |
| `/tell` (`/t`) | Whisper a player |
| `/group_invite`, `/group_kick`, `/group_promote` | Manage your group |
| `/group_leave` | Leave your current group |
| `/join_faction` | Join or leave a faction |
| `/motd` | Show the server's message of the day |
| `/players` | List online players |
| `/battlemode` | Toggle PvP/PvE |
| `/set_class` | Pick your class |
| `/location` | Set a named location |

### Inventory & Equipment

![Inventory and hotbar](https://cdn.xindeler.com/images/wiki/2026-09-11/guias/inventario-y-hotbar.webp)

Your gear lives in a tabbed **Inventory / Equipment** window: the Inventory tab lists everything you're carrying, while the Equipment tab shows a paperdoll of your character alongside an always-visible stat block, so you can compare a new item against what you have equipped without switching screens. Equip an item by double-clicking it or dragging it onto a paperdoll slot; drag frequently-used items onto your hotbar for quick access in combat.

Rather than fixed corner buttons for Settings, Social, Map and Crafting, the game shows contextual on-screen hints in the bottom-right corner that change with what you're doing — climbing, swimming, wielding a weapon, or moving through the night. All four menus stay reachable through their keybinds, the Esc menu, or your skillbar.

### Map & Waypoints

![Campfire, used as a waypoint](https://cdn.xindeler.com/images/wiki/2026-09-11/guias/fogata-de-campamento.webp)

The map shows your surroundings, points of interest and known settlements. Activating a campfire sets it as your waypoint — your respawn point, which persists across sessions until you set a new one.

### Gliding

<img src="https://cdn.xindeler.com/images/wiki/2026-09-11/guias/icono-viaje.webp" alt="Travel icon" width="120">

Every character can glide from sufficient height, useful for covering distance quickly or escaping a bad fight. It won't save you from a fall that never gets off the ground — you need altitude first.

### Gathering Resources

The world is full of two kinds of gatherable resources: **instant interactables** (pick up on contact, no tool required — herbs, mushrooms, loose ore) and **tool-specific interactables** (need the right tool equipped — a pickaxe for ore veins, an axe for trees).

<img src="https://cdn.xindeler.com/images/wiki/2026-09-11/guias/interaccion-instantanea.webp" alt="Instant interactable" width="300"> <img src="https://cdn.xindeler.com/images/wiki/2026-09-11/guias/interaccion-con-herramienta.webp" alt="Tool-specific interactable" width="300">

### What You'll Find Exploring

<img src="https://cdn.xindeler.com/images/wiki/2026-09-11/guias/icono-biomas.webp" alt="Biomes icon" width="120">

![A dungeon entrance](https://cdn.xindeler.com/images/wiki/2026-09-11/guias/entrada-de-mazmorra-generica.webp)

![A cave entrance](https://cdn.xindeler.com/images/wiki/2026-09-11/guias/entrada-de-cueva.webp)

Beyond the 10 tiered dungeons (see [Dungeons](/gameplay/mazmorras)), the world is dotted with other site types worth knowing on sight:

| Site | What it is |
|------|------------|
| <img src="https://cdn.xindeler.com/images/wiki/2026-09-11/guias/icono-pueblos.webp" alt="" width="40"> Town (Cliff, Savannah, Desert, Coastal variants) | Settlements with their own crafting stations and merchants |
| <img src="https://cdn.xindeler.com/images/wiki/2026-09-11/guias/icono-castillo.webp" alt="" width="40"> Citadel | A fortified, castle-like structure |
| <img src="https://cdn.xindeler.com/images/wiki/2026-09-11/guias/icono-arboles-gigantes.webp" alt="" width="40"> Giant Tree | A massive living landmark, often with its own points of interest |
| Bridge | Crosses rivers, canyons or ravines along major routes |
| Rock Circle | A small ritual site |
| Camp | A bandit or NPC encampment |
| Glider Course | A dedicated aerial obstacle course for testing your gliding |

See [Regions](/lore/regiones) and [Creatures](/base-de-datos/criaturas) for what's known about the world beyond that.

### Merchants & Trading

![A merchant NPC](https://cdn.xindeler.com/images/wiki/2026-09-11/guias/npc-mercader.webp)

Merchants buy and sell according to their specialization — see [NPCs](/base-de-datos/npcs) for the different roles.

![Grouping up with other players](https://cdn.xindeler.com/images/wiki/2026-09-11/guias/multijugador.webp)

Grouping up with other players lets you share quests, loot and difficult content — most dungeons are easier, and more fun, with a group.

## Next Steps

- [Character Creation →](/guias/creacion-de-personaje)
- [Class System →](/gameplay/clases/)
- [Combat System →](/gameplay/combate)

<p class="wiki-credit">Images on this page are adapted from the <a href="https://wiki.veloren.net">Veloren Wiki</a>, available under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</p>
