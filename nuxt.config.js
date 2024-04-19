const ROUTER_BASE = '/'
const BASE_URL = `${process.env.HOSTNAME}${ROUTER_BASE}`

export default defineNuxtConfig({
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: ROUTER_BASE,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  meta: {
    title: 'Amélie Coppeaux - Psychologue clinicienne à Toulouse',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content:
          "Diplômée de l’école de Psychologues Praticiens de Paris, je vous reçois dans mon cabinet pour des prises en charge d'enfants, d’adolescents et d’adultes. Formée à la passation de bilans lors de mes études, puis psychologue de l’Education Nationale, je propose également les bilans cognitifs et intellectuels pour les enfants de 6 à 16 ans (WISC-V).",
      },
      { name: 'format-detection', content: 'telephone=yes' },
      {
        name: 'og:title',
        content: 'Amélie Coppeaux - Psychologue clinicienne à Toulouse',
      },
      {
        name: 'og:description',
        content:
          "Diplômée de l’école de Psychologues Praticiens de Paris, je vous reçois dans mon cabinet pour des prises en charge d'enfants, d’adolescents et d’adultes. Formée à la passation de bilans lors de mes études, puis psychologue de l’Education Nationale, je propose également les bilans cognitifs et intellectuels pour les enfants de 6 à 16 ans (WISC-V).",
      },
      { name: 'og:type', content: 'website' },
      { name: 'og:image', content: `${BASE_URL}og-image.png` },
      { name: 'og:url', content: BASE_URL },
      { name: 'og:locale', content: 'fr_FR' },
      { "http-equiv": "Content-Security-Policy", content: "default-src 'self'; script-src 'self' https://maps.gstatic.com 'sha256-yX/iyX7D+2AX+qF0YUk4EXLqu5fIbl/NS5QXjj9BX4M='; frame-src https://www.google.com" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `${ROUTER_BASE}favicon.ico`, sizes: "48x48" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/style/fonts.css'],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome',
    '@nuxt/image',
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
        'faCalendarCheck',
        'faUsers',
        'faUserGraduate',
        'faChildReaching',
        "faMapLocationDot",
        "faArrowUpRightFromSquare"
      ],
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources', '@nuxtjs/robots', '@nuxtjs/sitemap', '@nuxt/image'],

  styleResources: {
    // Order is important before variables and mixins are used in the others files and should be loaded first
    scss: [
      './assets/style/variables.scss',
      './assets/style/mixins.scss',
      './assets/style/*.scss',
    ],
  },

  sitemap: {
    path: '/sitemap.xml',
    cacheTime: 1000 * 60 * 60 * 2,
    trailingSlash: true,
    gzip: true,
    hostname: process.env.HOSTNAME,
    defaults: {
      changefreq: 'yearly',
      priority: 0.8,
      lastmod: new Date(),
    },
  },

  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: `${BASE_URL}sitemap.xml`,
  },

  generate: { fallback: true },
  build: {
    extractCSS: true
  },
  image: {
    provider: 'static',
  },
})
