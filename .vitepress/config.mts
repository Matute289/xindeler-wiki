import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Xindeler Wiki',
  description: 'The encyclopedia of the Xindeler universe — an open-source fantasy MMORPG.',
  cleanUrls: true,

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Cinzel+Decorative:wght@400;700;900&display=swap', rel: 'stylesheet' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Xindeler Wiki' }],
  ],

  locales: {
    root: {
      label: '🇺🇸 English',
      lang: 'en-US',
      description: 'The encyclopedia of the Xindeler universe — an open-source fantasy MMORPG.',
      themeConfig: {
        nav: [
          { text: 'Xindeler', link: 'https://xindeler.com', noIcon: true },
          { text: 'Guides', link: '/guias/empezando' },
          { text: 'Gameplay', link: '/gameplay/clases/' },
          { text: 'Lore', link: '/lore/historia' },
          { text: 'Database', link: '/base-de-datos/criaturas' },
        ],
        sidebar: {
          '/guias/': [
            {
              text: 'Guides',
              items: [
                { text: 'Getting Started', link: '/guias/empezando' },
                { text: 'Character Creation', link: '/guias/creacion-de-personaje' },
              ],
            },
          ],
          '/gameplay/': [
            {
              text: 'Classes',
              collapsed: false,
              items: [
                { text: 'All Classes', link: '/gameplay/clases/' },
                { text: 'Warrior', link: '/gameplay/clases/warrior' },
                { text: 'Mage', link: '/gameplay/clases/mage' },
                { text: 'Cleric', link: '/gameplay/clases/cleric' },
                { text: 'Rogue', link: '/gameplay/clases/rogue' },
              ],
            },
            {
              text: 'Races',
              collapsed: false,
              items: [
                { text: 'All Races', link: '/gameplay/razas/' },
                { text: 'Human', link: '/gameplay/razas/human' },
                { text: 'Elf', link: '/gameplay/razas/elf' },
                { text: 'Dwarf', link: '/gameplay/razas/dwarf' },
                { text: 'Orc', link: '/gameplay/razas/orc' },
                { text: 'Danari', link: '/gameplay/razas/danari' },
                { text: 'Draugr', link: '/gameplay/razas/draugr' },
              ],
            },
            {
              text: 'Mechanics',
              collapsed: false,
              items: [
                { text: 'Combat', link: '/gameplay/combate' },
                { text: 'Magic', link: '/gameplay/magia' },
                { text: 'Crafting', link: '/gameplay/crafteo' },
                { text: 'Skills', link: '/gameplay/habilidades' },
              ],
            },
          ],
          '/lore/': [
            {
              text: 'The World',
              items: [
                { text: 'History', link: '/lore/historia' },
                { text: 'Cosmology', link: '/lore/cosmologia' },
                { text: 'Pantheon', link: '/lore/panteon' },
                { text: 'Regions', link: '/lore/regiones' },
                { text: 'Factions', link: '/lore/facciones' },
              ],
            },
          ],
          '/base-de-datos/': [
            {
              text: 'Database',
              items: [
                { text: 'Creatures', link: '/base-de-datos/criaturas' },
                { text: 'NPCs', link: '/base-de-datos/npcs' },
              ],
            },
          ],
        },
        search: {
          provider: 'local',
          options: {
            translations: {
              button: { buttonText: 'Search', buttonAriaLabel: 'Search' },
              modal: {
                noResultsText: 'No results for',
                resetButtonTitle: 'Clear search',
                footer: { selectText: 'select', navigateText: 'navigate', closeText: 'close' },
              },
            },
          },
        },
        footer: {
          message: 'Licensed under GPL-3.0',
          copyright: '© 2026 Xindeler Project — Open Source MMORPG',
        },
        editLink: {
          pattern: 'https://github.com/Matute289/xindeler-wiki/edit/main/:path',
          text: 'Edit this page on GitHub',
        },
        lastUpdated: { text: 'Last updated' },
        docFooter: { prev: 'Previous', next: 'Next' },
        outline: { label: 'On this page', level: [2, 3] },
        returnToTopLabel: 'Return to top',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Theme',
        lightModeSwitchTitle: 'Light mode',
        darkModeSwitchTitle: 'Dark mode',
      },
    },
    es: {
      label: '🇦🇷 Español',
      lang: 'es-419',
      description: 'La enciclopedia del universo de Xindeler — un MMORPG de fantasía de código abierto.',
      themeConfig: {
        nav: [
          { text: 'Xindeler', link: 'https://xindeler.com', noIcon: true },
          { text: 'Guías', link: '/es/guias/empezando' },
          { text: 'Gameplay', link: '/es/gameplay/clases/' },
          { text: 'Lore', link: '/es/lore/historia' },
          { text: 'Base de Datos', link: '/es/base-de-datos/criaturas' },
        ],
        sidebar: {
          '/es/guias/': [
            {
              text: 'Guías',
              items: [
                { text: 'Cómo empezar', link: '/es/guias/empezando' },
                { text: 'Creación de personaje', link: '/es/guias/creacion-de-personaje' },
              ],
            },
          ],
          '/es/gameplay/': [
            {
              text: 'Clases',
              collapsed: false,
              items: [
                { text: 'Todas las clases', link: '/es/gameplay/clases/' },
                { text: 'Warrior', link: '/es/gameplay/clases/warrior' },
                { text: 'Mage', link: '/es/gameplay/clases/mage' },
                { text: 'Cleric', link: '/es/gameplay/clases/cleric' },
                { text: 'Rogue', link: '/es/gameplay/clases/rogue' },
              ],
            },
            {
              text: 'Razas',
              collapsed: false,
              items: [
                { text: 'Todas las razas', link: '/es/gameplay/razas/' },
                { text: 'Human', link: '/es/gameplay/razas/human' },
                { text: 'Elf', link: '/es/gameplay/razas/elf' },
                { text: 'Dwarf', link: '/es/gameplay/razas/dwarf' },
                { text: 'Orc', link: '/es/gameplay/razas/orc' },
                { text: 'Danari', link: '/es/gameplay/razas/danari' },
                { text: 'Draugr', link: '/es/gameplay/razas/draugr' },
              ],
            },
            {
              text: 'Mecánicas',
              collapsed: false,
              items: [
                { text: 'Combate', link: '/es/gameplay/combate' },
                { text: 'Magia', link: '/es/gameplay/magia' },
                { text: 'Crafteo', link: '/es/gameplay/crafteo' },
                { text: 'Habilidades', link: '/es/gameplay/habilidades' },
              ],
            },
          ],
          '/es/lore/': [
            {
              text: 'El Mundo',
              items: [
                { text: 'Historia', link: '/es/lore/historia' },
                { text: 'Cosmología', link: '/es/lore/cosmologia' },
                { text: 'Panteón', link: '/es/lore/panteon' },
                { text: 'Regiones', link: '/es/lore/regiones' },
                { text: 'Facciones', link: '/es/lore/facciones' },
              ],
            },
          ],
          '/es/base-de-datos/': [
            {
              text: 'Base de Datos',
              items: [
                { text: 'Criaturas', link: '/es/base-de-datos/criaturas' },
                { text: 'NPCs', link: '/es/base-de-datos/npcs' },
              ],
            },
          ],
        },
        search: {
          provider: 'local',
          options: {
            translations: {
              button: { buttonText: 'Buscar', buttonAriaLabel: 'Buscar' },
              modal: {
                noResultsText: 'Sin resultados para',
                resetButtonTitle: 'Limpiar búsqueda',
                footer: { selectText: 'seleccionar', navigateText: 'navegar', closeText: 'cerrar' },
              },
            },
          },
        },
        footer: {
          message: 'Licenciado bajo GPL-3.0',
          copyright: '© 2026 Proyecto Xindeler — MMORPG de Código Abierto',
        },
        editLink: {
          pattern: 'https://github.com/Matute289/xindeler-wiki/edit/main/:path',
          text: 'Editar esta página en GitHub',
        },
        lastUpdated: { text: 'Última actualización' },
        docFooter: { prev: 'Anterior', next: 'Siguiente' },
        outline: { label: 'En esta página', level: [2, 3] },
        returnToTopLabel: 'Volver al inicio',
        sidebarMenuLabel: 'Menú',
        darkModeSwitchLabel: 'Tema',
        lightModeSwitchTitle: 'Modo claro',
        darkModeSwitchTitle: 'Modo oscuro',
      },
    },
  },

  themeConfig: {
    siteTitle: 'Xindeler Wiki',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Matute289/xindeler' },
      { icon: 'discord', link: 'https://discord.gg/Jpg9scQE' },
    ],
  },
})
