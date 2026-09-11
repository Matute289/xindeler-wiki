# Combate

El sistema de combate de Xindeler es en tiempo real, basado en habilidades activas, posicionamiento y mecánicas de estado que crean profundidad táctica.

## Controles de combate

Si nunca jugaste, acá va la versión corta — cada acción mencionada en esta página, mapeada a la tecla o botón que la ejecuta:

| Acción | Tecla / Botón |
|--------|------------------|
| Ataque primario | Clic izquierdo |
| Ataque secundario | Clic derecho |
| Bloquear (mantener) | Alt |
| Parry (Bloquear, cronometrado al instante exacto en que llega un ataque) | Alt |
| Rodar / esquivar | Clic central del mouse (macOS: Shift) |
| Alternar arma / empuñar | R |
| Habilidades de clase y combos (hotbar) | 1–9, Q |

Estas son las teclas por defecto — ver [Cómo empezar](/es/guias/empezando) para la lista completa de controles, y todas se pueden reasignar en el menú de configuración.

## Mecánicas fundamentales

### Energía
La energía es el recurso principal para ejecutar habilidades activas. Se regenera pasivamente y puede aumentarse con pasivos raciales (Human +3% recuperación, Gnome +5% máximo) o habilidades de clase.

### Combos
Algunas habilidades requieren o generan **combo points**. Ejecutar habilidades en el orden correcto maximiza el daño y desencadena efectos adicionales. Los combos se disparan desde tu hotbar (teclas **1–9** y **Q**), igual que cualquier otra habilidad activa.

### Poise
El sistema de **poise** determina cuándo un personaje puede ser interrumpido. Ataques pesados o acumulación de daño suficiente rompen el poise del objetivo, interrumpiendo su animación actual. El Dhampir tiene resistencia a CC, que indirectamente protege su poise.

El poise se agota a través de cuatro estados crecientes antes de que el personaje caiga al piso:

| Estado | Efecto |
|--------|--------|
| Interrupted | Un aturdimiento breve que corta tu acción actual |
| Stunned | Un aturdimiento más largo con retroceso |
| Dazed | Un tambaleo más pesado, movimiento muy reducido |
| Knocked Down | Caída completa — el retroceso más fuerte y la recuperación más larga |

Cada estado pega más fuerte que el anterior, así que desgastar el poise de un enemigo es una estrategia tan válida como el daño puro.

### Dodge / Roll — **Clic central del mouse** (macOS: **Shift**)
Rodar (roll) otorga inmunidad breve a ciertos ataques mientras dura — cronometrar un roll a través de la ventana activa de un ataque te permite esquivarlo por completo en vez de bloquearlo o recibirlo. El posicionamiento sigue importando: un roll que termina dentro del área efectiva del ataque no te salva.

### Block y Parry — **Alt**
Bloquear es una postura propia, distinta del **parry**. Mantener **Alt** reduce el daño entrante durante su duración; cronometrar esa misma tecla justo en el momento exacto de un ataque activa en cambio un parry, que reduce el daño a cero y puede abrir ventanas de contraataque. El Warrior tiene habilidades específicas para aprovechar el parry (DefensiveRiposte).

### Backstab — sin tecla propia, es posicional
Atacar a un enemigo **por la espalda** con tu ataque normal (**clic izquierdo**) otorga una bonificación de precisión. El Rogue es la clase más optimizada para aprovechar esta mecánica, pero cualquier clase puede ejecutar backstabs en el posicionamiento correcto.

### Combat Rating

Todo personaje y criatura tiene un **Combat Rating** — un número único que resume qué tan peligroso es, construido a partir de su equipo, stats y habilidades. Aparece en tu bolsa y hoja de personaje, en los nameplates sobre otras entidades (como un ícono chico de tier — o una calavera si te superan ampliamente), y en los cuadros de grupo. Reutiliza los mismos siete colores de calidad de los items:

| Tier | Rango de Combat Rating |
|------|-------------------------|
| Low | menos de 2.0 |
| Common | 2.0 – 3.5 |
| Moderate | 3.5 – 6.5 |
| High | 6.5 – 8.5 |
| Epic | 8.5 – 10.4 |
| Legendary | 10.4 – 122.0 |
| Artifact | 122.0 – 200.0 |

Un ícono de calavera en el nameplate significa que el Combat Rating del objetivo supera 122 — mejor alejate. El Combat Rating también alimenta otras fórmulas directamente: es un factor en los cálculos de resistencia, y la experiencia que ganás al matar algo es aproximadamente su Combat Rating × 20.

## Buffs y debuffs

### Buffs positivos (selección)

| Nombre | Efecto |
|--------|--------|
| Regeneration | Recupera salud por tiempo |
| Hastened | Aumenta velocidad de movimiento y ataque |
| Fortitude | Aumenta reducción de daño (Stoneblood del Dwarf) |
| Frenzied | Aumenta daño de ataque |
| Lifesteal | Roba porcentaje de daño como salud |
| Invulnerability | Inmunidad temporal a daño |
| Fury | Aumenta daño crítico |
| Berserk | Modo berserker: daño aumentado, defensa reducida |

### Debuffs (selección)

| Nombre | Efecto |
|--------|--------|
| Burning | Daño por tiempo de fuego |
| Bleeding | Daño por tiempo de sangrado |
| Frozen | Ralentización severa o inmovilización |
| Crippled | Ralentización de movimiento |
| Poisoned | Daño por tiempo de veneno |
| Terrified | Huida, incapaz de atacar (efecto del Mage) |
| Charmed | No ataca al lanzador (efecto del Cleric) |

## Proyectiles y área de efecto

Los proyectiles tienen cooldowns validados en el servidor — no es posible disparar más rápido de lo que el servidor permite. Los ataques de área tienen hitboxes precisas y telegráficas visibles.

## Muerte y respawn

Al morir, el personaje respawnea en el punto de spawn más cercano. No hay pérdida permanente de items o niveles.
