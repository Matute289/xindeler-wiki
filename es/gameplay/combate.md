# Combate

El sistema de combate de Xindeler es en tiempo real, basado en habilidades activas, posicionamiento y mecánicas de estado que crean profundidad táctica.

## Mecánicas fundamentales

### Energía
La energía es el recurso principal para ejecutar habilidades activas. Se regenera pasivamente y puede aumentarse con pasivos raciales (Human +3% recuperación, Danari +5% máximo) o habilidades de clase.

### Combos
Algunas habilidades requieren o generan **combo points**. Ejecutar habilidades en el orden correcto maximiza el daño y desencadena efectos adicionales.

### Poise
El sistema de **poise** determina cuándo un personaje puede ser interrumpido. Ataques pesados o acumulación de daño suficiente rompen el poise del objetivo, interrumpiendo su animación actual. El Draugr tiene resistencia a CC, que indirectamente protege su poise.

### Parry
Bloquear en el momento exacto de un ataque activa un **parry**, que reduce el daño a cero y puede abrir ventanas de contraataque. El Warrior tiene habilidades específicas para aprovechar el parry (DefensiveRiposte).

### Backstab
Atacar a un enemigo **por la espalda** otorga una bonificación de precisión. El Rogue es la clase más optimizada para aprovechar esta mecánica, pero cualquier clase puede ejecutar backstabs en el posicionamiento correcto.

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
