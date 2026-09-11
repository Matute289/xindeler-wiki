# Cómo empezar

Xindeler es un MMORPG de código abierto construido en Rust, bifurcado de Veloren y evolucionando hacia su propio mundo persistente. Esta guía te lleva desde la descarga hasta tu primera aventura.

## Requisitos del sistema

| | Mínimo | Recomendado |
|---|---|---|
| **SO** | Windows 10 / Linux / macOS 12+ | Windows 11 / Linux (última LTS) |
| **CPU** | 4 núcleos, 2.5 GHz | 6+ núcleos, 3.5 GHz |
| **RAM** | 8 GB | 16 GB |
| **GPU** | Compatible con Vulkan / Metal | GPU dedicada con 4 GB VRAM |
| **Almacenamiento** | 4 GB | 8 GB (SSD recomendado) |
| **Red** | 5 Mbps | 20 Mbps |

## Descarga

Descargá la última versión desde la sección de [Descargas](https://xindeler.com#download) de la web oficial.

Están disponibles versiones para:
- **Windows** — x86_64 y ARM64
- **Linux** — x86_64 y ARM64
- **macOS** — x86_64 e Apple Silicon (ARM64)

> El soporte de launcher con actualizaciones automáticas está en desarrollo. Por ahora la instalación es manual.

## Primeros pasos

### 1. Crear una cuenta

Al iniciar el cliente por primera vez, se te pedirá que crees una cuenta. Está disponible el login nativo con usuario/contraseña, además de OAuth de Discord y Google, y autenticación de dos factores opcional (2FA/TOTP) para seguridad extra de la cuenta.

### 2. Crear tu personaje

Elegí tu [raza](/es/gameplay/razas/) y tu [clase](/es/gameplay/clases/). Cada combinación tiene un estilo de juego diferente.

Algunos consejos para nuevos jugadores:
- **Warrior + Dwarf** — combinación resistente, ideal para aprender el sistema de combate.
- **Mage + Elf** — alta velocidad de movimiento y magia poderosa, más difícil de dominar.
- **Cleric + Human** — versátil, capaz de soportar y sanar, bueno para partidas en grupo.
- **Rogue + Gnome** — daño de precisión y movilidad extrema, para jugadores experimentados.

### 3. El mundo

Xindeler es un mundo vasto con biomas, sitios y mazmorras generadas proceduralmente. Explorar es parte del juego: encontrarás aldeas, ruinas, cuevas y criaturas en cada región.

### 4. Primeras misiones

Al llegar al mundo encontrarás NPCs en las aldeas cercanas que ofrecen misiones de inicio: recolección, exploración y combate. Son la mejor forma de aprender los sistemas básicos y conseguir tu primer equipamiento.

## Controles e interfaz

### Controles por defecto

| Acción | Tecla por defecto |
|--------|---------------------|
| Moverse adelante / izquierda / atrás / derecha | W / A / S / D |
| Saltar | Espacio |
| Rodar / esquivar | Clic central del mouse (macOS: Shift) |
| Agacharse | Shift |
| Planear | Ctrl |
| Ataque primario | Clic izquierdo |
| Ataque secundario / apuntar bloqueo | Clic derecho |
| Bloquear | Alt |
| Interactuar | E |
| Alternar arma / empuñar | R |
| Montar | F |
| Alternar linterna | G |
| Inventario | I |
| Menú de personaje (Diario) | P |
| Mapa | M |
| Crafteo | C |
| Social | O |
| Comerciar | T |
| Chat | Enter |
| Modo comando | / |
| Auto-caminar | . |
| Sentarse | K |
| Slots de hotbar 1–10 | 1–9, Q |
| Cambiar loadout | Tab |
| Captura de pantalla | F4 |

Todos estos se pueden reasignar en el menú de configuración.

### Comandos útiles

Comandos de chat que podés usar sin rol de admin/moderador:

| Comando | Qué hace |
|---------|----------|
| `/say` (`/s`) | Chat local |
| `/region` (`/r`) | Chat de región |
| `/world` (`/w`) | Chat mundial |
| `/faction` (`/f`) | Chat de facción |
| `/group` (`/g`) | Chat de grupo |
| `/tell` (`/t`) | Susurrar a un jugador |
| `/group_invite`, `/group_kick`, `/group_promote` | Gestionar tu grupo |
| `/group_leave` | Salir de tu grupo actual |
| `/join_faction` | Unirte o salir de una facción |
| `/motd` | Mostrar el mensaje del día del servidor |
| `/players` | Listar jugadores en línea |
| `/battlemode` | Alternar PvP/PvE |
| `/set_class` | Elegir tu clase |
| `/location` | Fijar una ubicación con nombre |

### Inventario y equipamiento

Tu equipo vive en una ventana con pestañas **Inventario / Equipamiento**: la pestaña Inventario lista todo lo que llevás encima, mientras que la de Equipamiento muestra un paperdoll de tu personaje junto con un bloque de estadísticas siempre visible, así podés comparar un ítem nuevo contra lo que tenés puesto sin cambiar de pantalla. Equipá un ítem con doble clic o arrastrándolo a un slot del paperdoll; arrastrá los ítems de uso frecuente a tu hotbar para acceso rápido en combate.

En vez de botones fijos de esquina para Configuración, Social, Mapa y Crafteo, el juego muestra pistas contextuales en pantalla en la esquina inferior derecha que cambian según lo que estás haciendo — escalando, nadando, empuñando un arma, o moviéndote de noche. Los cuatro menús siguen accesibles por sus atajos de teclado, el menú de Esc, o tu skillbar.

### Mapa y waypoints

El mapa muestra tu entorno, puntos de interés y asentamientos conocidos. Activar una fogata la fija como tu waypoint — tu punto de respawn, que persiste entre sesiones hasta que fijás uno nuevo.

### Planeo (Gliding)

Todo personaje puede planear desde suficiente altura, útil para cubrir distancia rápido o escapar de una mala pelea. No te salva de una caída que nunca llega a despegar — primero necesitás altura.

### Qué te vas a encontrar explorando

Más allá de las 10 mazmorras con tier (ver [Mazmorras](/es/gameplay/mazmorras)), el mundo está salpicado de otros tipos de sitio que vale la pena reconocer a simple vista:

| Sitio | Qué es |
|-------|--------|
| Pueblo (variantes Acantilado, Sabana, Desierto, Costero) | Asentamientos con sus propias estaciones de crafteo y mercaderes |
| Ciudadela | Una estructura fortificada tipo castillo |
| Árbol Gigante | Un hito vivo masivo, a menudo con sus propios puntos de interés |
| Puente | Cruza ríos, cañones o barrancos en rutas principales |
| Círculo de Piedra | Un sitio ritual chico |
| Campamento | Un campamento de bandidos o NPCs |
| Circuito de Glider | Un circuito aéreo de obstáculos dedicado para probar tu planeo |

Ver [Regiones](/es/lore/regiones) y [Criaturas](/es/base-de-datos/criaturas) para lo que se sabe del mundo más allá de esto.

### Mercaderes y comercio

Los mercaderes compran y venden según su especialización — ver [NPCs](/es/base-de-datos/npcs) para los distintos roles. Agruparte con otros jugadores te permite compartir misiones, loot y contenido difícil — la mayoría de las mazmorras son más fáciles, y más divertidas, en grupo.

## Siguientes pasos

- [Creación de personaje →](/es/guias/creacion-de-personaje)
- [Sistema de clases →](/es/gameplay/clases/)
- [Sistema de combate →](/es/gameplay/combate)
