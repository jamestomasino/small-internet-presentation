
export default {
  telemetry: false,
  target: 'static',
  ssr: false,
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/favicon-512x512.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { mode: 'client', src: '~/plugins/vimeo-player.js' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/redirect-module'
  ],
  sitemap: {
    hostname: 'https://small-internet-presentation.netlify.app',
    gzip: true,
    trailingSlash: true,
    defaults: {
      changefreq: 'monthly',
      priority: 0.9,
      lastmod: new Date(),
      lastmodrealtime: true
    },
    routes: [
      {
        url: '/',
        priority: 1
      }
    ]
  },
  robots: {
    UserAgent: '*',
    Sitemap: 'https://small-internet-presentation.netlify.app/sitemap.xml'
  },
  redirect: [
    { from: '^(\\/[^\\?]*[^\\/])(\\?.*)?$', to: '$1/$2', statusCode: 301 }
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  components: true,
  generate: {
    fallback: true
  }
}
