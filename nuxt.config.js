
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'cheapeone',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Professional Site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-b.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },

  plugins: [
    {
      src: '~plugins/vue-masonry.js',
      ssr: false
    }
  ],

  css: [
    // '~/assets/style/app.styl'
  ],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    analyze: true
  },

  buildModules: [
    '@nuxtjs/vuetify'
  ]
}
