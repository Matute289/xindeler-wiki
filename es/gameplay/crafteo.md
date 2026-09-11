# Crafteo

El sistema de crafteo de Xindeler permite crear armas, armaduras, consumibles, herramientas y más a partir de materiales recolectados en el mundo.

## Cómo funciona

Para craftear un item necesitás:
1. Los **materiales** requeridos en tu inventario
2. Una **estación de crafteo** del tipo correspondiente
3. Haber desbloqueado la **receta** (algunas son automáticas, otras requieren libros de recetas)

## Estaciones de crafteo

Hay 10 estaciones de crafteo, cada una cubriendo una categoría distinta de receta:

| Estación | Se usa para | Recetas |
|----------|-------------|--------:|
| Banco de Crafteo | Ensamblaje general de items | 132 |
| Yunque | Armas y armaduras metálicas | 72 |
| Telar | Tejer tela a partir del hilo | 56 |
| Caldero | Pociones e items alquímicos | 20 |
| Fragua | Fundir mineral en lingotes | 10 |
| Olla de Cocina | Comida y consumibles | 8 |
| Rueca | Convertir fibra cruda en hilo | 7 |
| Curtidor | Curar cuero crudo | 4 |
| Banco de Desmantelamiento | Desarmar items para recuperar materiales | — (no usa recetas) |
| Banco de Reparación | Reparación de equipamiento | — (no usa recetas) |

## Categorías de items crafteables

### Armas
Las armas de Xindeler son **modulares**: los materiales usados determinan los stats finales del arma. Los tipos disponibles incluyen espada, hacha, martillo, arco, bastón, cetro, tomo, foco y símbolo sagrado. Daga, escudo, lanza y cerbatana están planeadas pero todavía no son crafteables.

Los materiales de armas vienen en dos familias — metales y maderas (ver la tabla de materiales más abajo) — con distintas propiedades según la fuente.

### Armaduras
Existe una gran variedad de sets de armadura — Adventurer, Assassin, Boreal, Cultist, Golemite, Leather Plate, entre muchos más — ver [Armaduras](/es/base-de-datos/armaduras) para la lista completa. Cada set tiene requerimientos de clase y nivel diferentes. La armadura de Mail funciona distinto a los sets con nombre propio: en vez de una identidad fija, escala con la misma escalera de 6 tiers de metal que las armas (Bronce a Orichalcum), así que sus stats dependen enteramente de con qué metal la craftees.

### Consumibles y comida
La comida otorga buffs temporales de combate. Los alimentos más complejos requieren más ingredientes pero dan mejores efectos.

### Herramientas y crafteo
Herramientas especializadas para minería, pesca y otras actividades de recolección también son crafteables y mejoran la eficiencia de esas actividades.

### Gliders y linternas
Items de utilidad: los gliders permiten planear desde alturas, las linternas iluminan zonas oscuras como cuevas y mazmorras.

## Calidad de items

Los items tienen un sistema de **calidad** representado por colores. La calidad del item final depende de los materiales usados: mejores materiales = mayor calidad.

| Calidad | Color |
|---------|-------|
| Low (Baja) | Gris |
| Common (Común) | Celeste |
| Moderate (Moderada) | Verde |
| High (Alta) | Azul |
| Epic (Épica) | Violeta |
| Legendary (Legendaria) | Dorado |
| Artifact (Artefacto) | Naranja |

Nombres reales de material, por categoría y tier (confirmados contra los datos reales del juego — no todas las categorías tienen material en todos los tiers):

| Tier | Metal | Madera | Textil | Cuero |
|------|-------|--------|--------|-------|
| Low | Bronce, Estaño | Madera | Lino | Cuero Animal, Cuero Simple |
| Common | Hierro | Bambú | Lana, Tiras de Tela | Cuero Duro, Cuero Grueso, Tiras de Cuero |
| Moderate | Acero | Madera Dura | Seda | — |
| High | Cobalto | Madera de Hierro | Tela de Vida | Cuero de Troll |
| Epic | Plata, Oro, Acero de Sangre | Madera Escarcha | Tejido Lunar | Cuero Resistente, Cuero Rígido |
| Legendary | Orichalcum | Madera Anciana | Sedasolar | — |

Ningún material llega al tier Artifact — esa calidad está reservada para items crafteados o únicos, no para materiales crudos.

## Reparación

Los items no tienen costo de reparación con recursos. Podés reparar tu equipo sin penalización económica.

## Inventario

El inventario tiene **36 slots**, expandido desde la versión original del fork. Algunos items se apilan (materiales, consumibles), otros ocupan slots individuales (armas, armaduras).
