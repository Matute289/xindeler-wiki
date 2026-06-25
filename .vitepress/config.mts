import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Xindeler Wiki',
  description: 'La enciclopedia del universo y mecánicas de Xindeler — el MMORPG de código abierto.',
  lang: 'es-AR',
  cleanUrls: true,

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Cinzel+Decorative:wght@400;700;900&display=swap', rel: 'stylesheet' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Xindeler Wiki' }],
  ],

  themeConfig: {
    siteTitle: 'Xindeler Wiki',

    nav: [
      { text: 'Guías', link: '/guias/empezando' },
      { text: 'Gameplay', link: '/gameplay/clases/' },
      { text: 'Lore', link: '/lore/historia' },
      { text: 'Base de Datos', link: '/base-de-datos/criaturas' },
    ],

    sidebar: {
      '/guias/': [
        {
          text: 'Guías',
          items: [
            { text: 'Cómo empezar', link: '/guias/empezando' },
            { text: 'Creación de personaje', link: '/guias/creacion-de-personaje' },
          ],
        },
      ],

      '/gameplay/': [
        {
          text: 'Clases',
          collapsed: false,
          items: [
            { text: 'Todas las clases', link: '/gameplay/clases/' },
            { text: 'Warrior', link: '/gameplay/clases/warrior' },
            { text: 'Mage', link: '/gameplay/clases/mage' },
            { text: 'Cleric', link: '/gameplay/clases/cleric' },
            { text: 'Rogue', link: '/gameplay/clases/rogue' },
          ],
        },
        {
          text: 'Razas',
          collapsed: false,
          items: [
            { text: 'Todas las razas', link: '/gameplay/razas/' },
            { text: 'Human', link: '/gameplay/razas/human' },
            { text: 'Elf', link: '/gameplay/razas/elf' },
            { text: 'Dwarf', link: '/gameplay/razas/dwarf' },
            { text: 'Orc', link: '/gameplay/razas/orc' },
            { text: 'Danari', link: '/gameplay/razas/danari' },
            { text: 'Draugr', link: '/gameplay/razas/draugr' },
          ],
        },
        {
          text: 'Mecánicas',
          collapsed: false,
          items: [
            { text: 'Combate', link: '/gameplay/combate' },
            { text: 'Magia', link: '/gameplay/magia' },
            { text: 'Crafteo', link: '/gameplay/crafteo' },
            { text: 'Habilidades', link: '/gameplay/habilidades' },
          ],
        },
      ],

      '/lore/': [
        {
          text: 'El Mundo',
          items: [
            { text: 'Historia', link: '/lore/historia' },
            { text: 'Cosmología', link: '/lore/cosmologia' },
            { text: 'Panteón', link: '/lore/panteon' },
            { text: 'Regiones', link: '/lore/regiones' },
            { text: 'Facciones', link: '/lore/facciones' },
          ],
        },
      ],

      '/base-de-datos/': [
        {
          text: 'Base de Datos',
          items: [
            { text: 'Criaturas', link: '/base-de-datos/criaturas' },
            { text: 'NPCs', link: '/base-de-datos/npcs' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Matute289/xindeler' },
      { icon: 'discord', link: 'https://discord.gg/Jpg9scQE' },
    ],

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
})
