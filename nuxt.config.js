export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Amélie Coppeaux - Psychologue clinicienne à Toulouse',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Enfants - Adolescents - Adultes. Bilan intellectuel et cognitif (WISC 5).',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/style/fonts.css'],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome',
  ],

  fontawesome: {
    icons: {
      solid: [
        'faUsersViewfinder',
        'faBullseye',
        'faComments',
        'faCircleInfo',
        'faLocationDot',
        'faPhone',
        'faEnvelope',
        'faFaceFrown',
        'faBars',
        'faAt',
      ],
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources'],

  styleResources: {
    // Order is important before variables and mixins are used in the others files and should be loaded first
    scss: [
      './assets/style/variables.scss',
      './assets/style/mixins.scss',
      './assets/style/*.scss',
    ],
  },
}
