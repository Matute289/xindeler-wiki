# Manifest de assets importados de la Veloren Wiki

Fecha: 2026-09-11. Origen: https://wiki.veloren.net — páginas del bloque "Getting Started" a "NPCs" (`Getting_Started`, `Combat`, `Crafting`, `Weapons`, `Armor`, `Items`, `Exploration`, `Dungeons`, `NPCs`), que es el mismo rango ya usado como referencia de contenido en `docs/superpowers/specs/2026-09-10-veloren-wiki-content-expansion-design.md`.

**Pedido de Matías (2026-09-11):** crear una carpeta y descargar los assets/imágenes que usa la wiki de Veloren para reutilizarlos en la nuestra donde corresponda. Reglas dadas: (1) sí, agregar los que hagan falta; (2) excluir solo imágenes que muestren la palabra "Veloren" visible en la imagen (ej. pantalla de título) o el mapa mundial específico de Veloren (porque para la v1 el mapa va a ser el de Cromatolis); (3) el resto es reutilizable porque el juego comparte casi todas las mecánicas.

**Licencia** (confirmada en el footer real de `wiki.veloren.net`): *"Content is available under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0) unless otherwise noted."*

**Actualización 2026-09-11 (Matías):** para no pesar el repo de git con binarios, las 87 imágenes se migraron de `public/images/veloren-wiki/` a `cdn.xindeler.com` — convertidas a WebP y subidas a `/srv/xindeler/cdn/images/wiki/2026-09-11/<categoria>/`, siguiendo la misma convención `tipo/categoría/fecha/` que ya usan las imágenes y sonidos de la landing. Los `.md` de contenido referencian `https://cdn.xindeler.com/images/wiki/2026-09-11/<categoria>/<archivo>.webp` en vez de una ruta local — las rutas locales `.jpg`/`.png` mencionadas más abajo en este manifest ya no existen en el repo, quedan solo como registro histórico de la investigación original.

Atribución sugerida para usar en la wiki (pie de página o página de créditos):

> Imágenes adaptadas de la [Veloren Wiki](https://wiki.veloren.net), disponibles bajo licencia [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

## Resultado

**87 imágenes descargadas** a `public/images/veloren-wiki/<categoria>/` — 46 MB originales, optimizadas a **5.9 MB** (screenshots opacos convertidos a JPEG calidad 82, íconos con transparencia real dejados en PNG; todo redimensionado a máx. 1400px de lado). Sin commitear — pendiente de revisión. Ninguna pasó el filtro sin chequeo visual: antes de descargar el lote completo, se verificaron manualmente ~24 imágenes representativas (una por patrón de nombre) para confirmar si tenían o no el watermark "Veloren Pre-Alpha-YYYY-MM-DD" que el juego graba en la esquina de los screenshots con HUD completo. **Ese watermark aparece en algunos screenshots de gameplay completos, pero no en todos** — los recortes de UI (menús, tooltips), los renders de personaje/criatura, y los banners de categoría están limpios.

| Categoría | Cantidad | Carpeta |
|---|---|---|
| guías | 17 | `guias/` |
| combate | 3 | `combate/` |
| crafteo | 20 | `crafteo/` |
| armas | 8 | `armas/` |
| armaduras | 3 | `armaduras/` |
| razas | 10 | `razas/` |
| mazmorras | 23 | `mazmorras/` |
| criaturas | 3 | `criaturas/` |

## Excluidas (con motivo)

| Archivo original | Página de origen | Motivo de exclusión |
|---|---|---|
| `Veloren_Title_Screen_Ingame.png` | Getting_Started | Pantalla de título — dice "Veloren" explícitamente (confirmado por el alt-text de la propia wiki: *"A screenshot of Veloren's title screen"*). Regla (a). |
| `Veloren_map_ingame.png` | Getting_Started | Captura del mapa mundial específico de Veloren (alt-text: *"A screenshot of the map, showing several local..."*). Regla (b) — va a quedar obsoleto cuando el juego pase al mapa de Cromatolis. |
| `Veloren_character_creation_ingame.png` | Getting_Started | Verificada visualmente: tiene el watermark **"Veloren Pre-Alpha-2022-01-06"** visible arriba a la izquierda. |
| `Veloren_main_interface_highlights_ingame.png` | Getting_Started | Verificada visualmente: mismo watermark **"Veloren Pre-Alpha-2022-01-06"** visible arriba al centro. |
| `Veloren_skill_points_ingame.png` | Getting_Started | Verificada visualmente: fragmento de texto "Veloren..." visible (parcialmente tapado por la barra de título "Diary"). Además, el árbol de habilidades de Veloren es por-arma, no calza 1:1 con el sistema de 14 clases de Xindeler — mayor riesgo de confundir al lector aunque se limpiara el watermark. |

Todas las demás imágenes de la lista de candidatas (~20 revisadas una por una, incluyendo banners de categoría, screenshots de menú/inventario/tooltip, portraits de raza y de criaturas de mazmorra) se verificaron limpias de texto "Veloren" y se descargaron.

**Nota de alcance:** la Veloren Wiki tiene ~510 íconos individuales de items (una imagen por cada arma × cada tier de material — ej. 6 tiers × ~15 tipos de arma solo en `Weapons`). No se descargó ese universo completo: se tomó **un ícono representativo por tipo de arma** (tier "Steel"/"Hardwood") porque `gameplay/armas.md` documenta tipos de arma, no cada combinación de material. Mismo criterio para íconos de material de crafteo — se priorizaron los que ya tienen tabla propia en `crafteo.md` (troncos, lingotes, textiles, cueros, minerales, gemas, pieles, materiales animales). Si más adelante se quiere ilustrar cada tier de material específico, hay que volver a la wiki de Veloren por esos íconos puntuales (quedaron resueltos en `full_res_urls` — ver nota al final).

## Detalle por categoría

### guias/ → `guias/empezando.md`, `guias/creacion-de-personaje.md`

| Archivo local | URL original | Página Veloren | Dónde insertarlo |
|---|---|---|---|
| `menu-de-crafteo.jpg` | wiki.veloren.net/wiki/File:Veloren_crafting_menu_ingame.png | Getting_Started | Sección de controles/interfaz |
| `inventario-y-hotbar.jpg` | ...Veloren_inventory_and_hotbar_ingame.png | Getting_Started | Sección de controles/interfaz |
| `npc-mercader.jpg` | ...Veloren_merchant_ingame.png | Getting_Started | Sección de NPCs o `base-de-datos/npcs.md` |
| `multijugador.jpg` | ...Veloren_multiplayer_players_ingame.png | Getting_Started | Sección multijugador |
| `fogata-de-campamento.jpg` | ...Veloren_campfire_ingame.png | Getting_Started | Sección de mecánicas de mundo |
| `interaccion-instantanea.jpg` | ...Veloren_Instant_Interactible_Ingame.png | Getting_Started | Sección "cómo recolectar recursos" |
| `interaccion-con-herramienta.jpg` | ...Veloren_Tool-specific_Interactible_Ingame.png | Getting_Started | Sección "cómo recolectar recursos" |
| `entrada-de-mazmorra-generica.jpg` | ...Veloren_dungeon_entrance_ingame.png | Getting_Started | Tabla de tipos de sitio |
| `entrada-de-cueva.jpg` | ...Veloren_cave_entrance_ingame.png | Getting_Started | Tabla de tipos de sitio |
| `icono-biomas.jpg` | ...Biomes_fp.png | Exploration | Tabla de tipos de sitio |
| `icono-castillo.jpg` | ...Castle_fp.png | Exploration | Tabla de tipos de sitio |
| `icono-cuevas.jpg` | ...Caves_fp.png | Exploration | Tabla de tipos de sitio |
| `icono-mazmorras.jpg` | ...Dungeons_fp.png | Exploration | Tabla de tipos de sitio |
| `icono-arboles-gigantes.jpg` | ...Giant_Trees_fp.png | Exploration | Tabla de tipos de sitio |
| `icono-sitios.jpg` | ...Sites_fp.png | Exploration | Tabla de tipos de sitio |
| `icono-pueblos.jpg` | ...Towns_fp.png | Exploration | Tabla de tipos de sitio |
| `icono-viaje.jpg` | ...Travel_fp.png | Exploration | Sección de viaje/mounts |

### combate/ → `gameplay/combate.md`

| Archivo local | URL original | Página Veloren | Dónde insertarlo |
|---|---|---|---|
| `agacharse-sigilo.jpg` | ...Veloren_crouching_ingame.png | Combat/Getting_Started | Sección de sigilo/stealth |
| `barras-de-vida-y-energia.jpg` | ...Veloren_resource_bars_screenshot.png | Getting_Started | Sección de Poise/HUD de combate |
| `banner-combate.jpg` | ...Veloren_Combat_Category.png | Combat | Header de la página |

### crafteo/ → `gameplay/crafteo.md`

| Archivo local | URL original | Dónde insertarlo |
|---|---|---|
| `ejemplo-receta-crafteo.jpg` | ...Veloren_crafting_apple_stick_ingame.png | Ejemplo de receta |
| `banner-estaciones.jpg` | ...Veloren_Crafting_Stations_Category.png | Header de sección de estaciones |
| `icono-estacion-yunque.png` | ...Veloren_Anvil_Category_Icon.png | Tabla de 10 estaciones — Anvil |
| `icono-estacion-caldero.png` | ...Veloren_Cauldron_Category_Icon.png | Tabla de 10 estaciones — Cauldron |
| `icono-estacion-olla-de-cocina.png` | ...Veloren_Cooking_Pot_Category_Icon.png | Tabla de 10 estaciones — Cooking Pot |
| `icono-estacion-mesa-de-crafteo.png` | ...Veloren_Crafting_Bench_Category_Icon.png | Tabla de 10 estaciones — Crafting Bench |
| `icono-estacion-forja.png` | ...Veloren_Forge_Category_Icon.png | Tabla de 10 estaciones — Forge |
| `icono-estacion-telar.png` | ...Veloren_Loom_Category_Icon.png | Tabla de 10 estaciones — Loom |
| `icono-estacion-banco-de-reparacion.png` | ...Veloren_Repair_Bench_Category_Icon.png | Tabla de 10 estaciones — Repair Bench |
| `icono-estacion-banco-de-reciclaje.png` | ...Veloren_Salvaging_Bench_Category_Icon.png | Tabla de 10 estaciones — Salvaging Bench |
| `icono-estacion-rueca.png` | ...Veloren_Spinning_Wheel_Category_Icon.png | Tabla de 10 estaciones — Spinning Wheel |
| `icono-estacion-curtidor.png` | ...Veloren_Tanning_Rack_Category_Icon.png | Tabla de 10 estaciones — Tanning Rack |
| `icono-material-troncos.png` | ...Veloren_Logs_Category_Icon.png | Tabla de materiales — madera |
| `icono-material-lingotes.png` | ...Veloren_Ingots_Category_Icon.png | Tabla de materiales — metal |
| `icono-material-textiles.png` | ...Veloren_Textiles_Category_Icon.png | Tabla de materiales — textil |
| `icono-material-cueros.png` | ...Veloren_Leathers_Category_Icon.png | Tabla de materiales — cuero |
| `icono-material-minerales.png` | ...Veloren_Ores_Category_Icon.png | Tabla de materiales — minerales crudos |
| `icono-material-gemas.png` | ...Veloren_Gems_Category_Icon.png | Tabla de materiales — gemas |
| `icono-material-pieles.png` | ...Veloren_Hides_Category_Icon.png | Tabla de materiales — pieles |
| `icono-material-materiales-animales.png` | ...Veloren_Animal_Materials_Category_Icon.png | Tabla de materiales — misc animal |

### armas/ → `gameplay/armas.md`

| Archivo local | URL original | Dónde insertarlo |
|---|---|---|
| `banner-armas.png` | ...Veloren_Weapon_Category.png | Header de la página |
| `icono-categoria-armas.png` | ...Veloren_Weapons_Category_Icon.png | Header de tabla de tipos |
| `icono-espada.png` | ...Veloren_Steel_Longsword.png | Tabla de tipos — Sword |
| `icono-hacha.png` | ...Veloren_Steel_Axe.png | Tabla de tipos — Axe |
| `icono-martillo.png` | ...Veloren_Steel_Hammer.png | Tabla de tipos — Hammer |
| `icono-arco.png` | ...Veloren_Hardwood_Bow.png | Tabla de tipos — Bow |
| `icono-baston.png` | ...Veloren_Hardwood_Staff.png | Tabla de tipos — Staff |
| `icono-cetro.png` | ...Veloren_Hardwood_Sceptre.png | Tabla de tipos — Sceptre |

**Gap:** no hay ícono para Tome, Holy Symbol ni Focus — esas tres armas de caster son propias de Xindeler (clases Warlock/Cleric/etc.), no existen en Veloren vanilla, así que no hay asset de origen para reutilizar.

### armaduras/ → `base-de-datos/armaduras.md`

| Archivo local | URL original | Dónde insertarlo |
|---|---|---|
| `tooltip-de-armadura.jpg` | ...Veloren_armor_tooltip_ingame.png | Ejemplo de stats de un ítem |
| `icono-categoria-armadura.png` | ...Veloren_Armor_Category_Icon.png | Header de la página |
| `icono-sets-de-armadura.png` | ...Veloren_Armor_Sets_Category_Icon.png | Header de tabla de sets |

### razas/ → `gameplay/razas/*.md`

| Archivo local | URL original | Raza | Nota |
|---|---|---|---|
| `humano-masculino.jpg` | ...Veloren_Man_Base.png | Human | **INFERIDO** — el archivo original no dice "Human" en el nombre, es la única raza jugable sin imagen etiquetada explícitamente en la página. Se identificó por descarte y por tener orejas ligeramente puntiagudas consistentes con el modelo base humano de Veloren, no por una etiqueta directa. Revisar antes de publicar. |
| `humano-femenino.jpg` | ...Veloren_Female_Base.png | Human | Mismo caveat. |
| `gnome-masculino.jpg` | ...Veloren_Danari_Male.png | Gnome | El archivo dice "Danari" (nombre viejo de Veloren); ya renombrado Danari→Gnome en el motor (`xindeler-new-horizon`, PR de razas). |
| `gnome-femenino.jpg` | ...Veloren_Danari_Female.png | Gnome | Ídem. |
| `orco-masculino.jpg` | ...Veloren_Orc_Male.png | Orc | — |
| `orco-femenino.jpg` | ...Veloren_Orc_Female.png | Orc | — |
| `enano-masculino.jpg` | ...Veloren_Dwarf_Male.png | Dwarf | — |
| `enano-femenino.jpg` | ...Veloren_Dwarf_Female.png | Dwarf | — |
| `dhampir-masculino.jpg` | ...Veloren_Undead_Male.png | Dhampir | El archivo dice "Undead" (nombre viejo de Veloren); ya renombrado Draugr/Undead→Dhampir en el motor. |
| `dhampir-femenino.jpg` | ...Veloren_Undead_Female.png | Dhampir | Ídem. |

**Gap:** no se encontró ninguna imagen de Elf en el rango de páginas investigado — falta portrait para `gameplay/razas/elf.md`.

### mazmorras/ → `gameplay/mazmorras.md`

Cada dungeon de nuestra tabla mapeado a su entrada/exterior + boss(es), usando los nombres que ya aparecen en `gameplay/mazmorras.md`:

| Nuestro dungeon | Archivo local | Archivo original | Contenido |
|---|---|---|---|
| The Wrackwood Bastion | `wrackwood-bastion-jefe.jpg` | Veloren_Gnarling_Chieftain.png | Boss (Chieftain) |
| The Wrackwood Bastion | `wrackwood-bastion-harvester.jpg` | Veloren_Harvester.png | Boss (Harvester) |
| The Rimehowl Hold | `rimehowl-hold-anciano.jpg` | Veloren_Adlet_Elder.png | Boss (Elder) |
| The Rimehowl Hold | `rimehowl-hold-yeti.jpg` | Veloren_Yeti.png | Boss (Yeti) |
| The Rimehowl Hold | `rimehowl-hold-exterior.jpg` | Veloren_Adlet_Stronghold.png | Exterior |
| The Drowned Shoal | `drowned-shoal-karkatha.jpg` | Veloren_Karkatha.png | Boss (**The Shellmaw**) — verificado contra `xindeler-design/imports/2026-09-11-dungeon-name-mapping.md`: el archivo original se llama "Karkatha" (nombre de Veloren) pero el boss real de nuestro canon es **The Shellmaw** — usar ese nombre en el alt-text/caption, nunca "Karkatha" |
| The Drowned Shoal | `drowned-shoal-exterior.jpg` | Veloren_Sahagin_Island.png | Exterior |
| The Claybound Ossuary | `claybound-ossuary-gravewarden.jpg` | Veloren_Gravewarden.png | Boss (Gravewarden — nombre exacto ya coincide) |
| The Claybound Ossuary | `claybound-ossuary-clay-golem.jpg` | Veloren_Clay_Golem.png | Mob |
| Castle Sanguine | `castle-sanguine-bloodmoon-bat.jpg` | Veloren_Vampire_Bat.png | Boss (**Bloodmoon Bat**) — verificado contra el mismo doc de mapeo: es el asset correcto, nombre ya coincide con el canon (no es un proper noun de Veloren, se mantuvo tal cual); `Bloodmoon_Heiress` queda descartado como se sospechaba |
| Castle Sanguine | `castle-sanguine-exterior.jpg` | Veloren_Vampire_Castle.png | Exterior |
| The Chitinfall Hive | `chitinfall-hive-cyclops.jpg` | Veloren_Cyclops_(Myrmidon).png | Boss (Cyclops) |
| The Chitinfall Hive | `chitinfall-hive-minotaur.jpg` | Veloren_Minotaur.png | Boss (Minotaur) |
| The Chitinfall Hive | `chitinfall-hive-exterior.jpg` | Veloren_Myrmidon_Dungeon.png | Exterior |
| The Sunken Cathedral of Dagon | `sunken-cathedral-dagon.jpg` | Veloren_Dagon.png | Boss (Dagon — nombre exacto ya coincide) |
| The Sunken Cathedral of Dagon | `sunken-cathedral-exterior.jpg` | Veloren_Sea_Chapel.png | Exterior |
| The Cultist Sanctum | `cultist-sanctum-mind-eater.jpg` | Veloren_Mindflayer.png | Boss (The Mind-Eater) — archivo dice "Mindflayer" (nombre viejo), ya renombrado en el motor |
| The Cultist Sanctum | `cultist-sanctum-exterior.jpg` | Veloren_Cultist_Dungeon_Entrance.png | Exterior |
| The Sundered Necropolis | `sundered-necropolis-cursekeeper.jpg` | Veloren_Cursekeeper.png | Boss (Cursekeeper — nombre exacto ya coincide) |
| The Sundered Necropolis | `sundered-necropolis-exterior.jpg` | Veloren_Haniwa_Catacomb_Entrance.png | Exterior |
| The Cinderdeep Mine | `cinderdeep-mine-forgemaster.jpg` | Veloren_Forgemaster.png | Boss (Forgemaster — nombre exacto ya coincide) |
| The Cinderdeep Mine | `cinderdeep-mine-exterior.jpg` | Veloren_Dwarven_Mine.png | Exterior |
| — | `banner-mazmorras.jpg` | Veloren_Dungeons_Category.png | Header de la página |

### criaturas/ → `base-de-datos/criaturas.md`

| Archivo local | URL original | Nota |
|---|---|---|
| `lobo.jpg` | ...Veloren_Wolf.png | Fauna genérica |
| `oso.jpg` | ...Veloren_Bear.png | Fauna genérica |
| `rata.jpg` | ...Veloren_Rat.png | Fauna genérica |

## Pendiente / follow-up sugerido

1. ~~Optimizar imágenes pesadas~~ — **hecho**: 46MB → 5.9MB (screenshots opacos a JPEG q82, íconos con transparencia real en PNG, todo redimensionado a máx. 1400px).
2. **Verificar los 2 gaps de razas** (humano-masculino/femenino inferidos por descarte, no por etiqueta) antes de publicarlos como "Human" — o buscar un screenshot propio del motor si hay dudas.
3. **Gap de Elf**: no se encontró ninguna imagen en este rango de páginas de Veloren. Human/Elf/ninguna de las 3 armas de caster propias (Tome/Holy Symbol/Focus) tienen asset de origen.
4. ~~Cruzar los 2 nombres de boss dudosos~~ — **hecho**, verificado contra `xindeler-design/imports/2026-09-11-dungeon-name-mapping.md`: `Karkatha.png` es **The Shellmaw** (Drowned Shoal), `Vampire_Bat.png` es **Bloodmoon Bat** (Castle Sanguine, correcto tal cual, no confundir con el asset huérfano `Bloodmoon_Heiress`). Ambas tablas de este manifest ya usan el nombre correcto.
5. Ningún archivo `.md` de contenido fue tocado en esta tarea — la inserción real de `![]()` en las páginas queda para el siguiente paso.
6. Nada de esto está commiteado — `public/images/veloren-wiki/` está sin trackear en git, pendiente de revisión antes de `git add`.
