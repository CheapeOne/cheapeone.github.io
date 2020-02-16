
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
    '~/plugins/vuetify.js',
    {
      src: '~plugins/vue-masonry.js',
      ssr: false
    }
  ],
  css: [
    '~/assets/style/app.styl'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      '~/plugins/vuetify.js'
    ],
    extractCSS: true,
    analyze: true,

    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push(
          // Runs ESLint on save
          // {
          //   enforce: 'pre',
          //   test: /\.(js|vue)$/,
          //   loader: 'eslint-loader',
          //   exclude: /(node_modules)/
          // },
          {
            test: /\.styl$/,
            loader: ['style-loader', 'css-loader', 'stylus-loader']
          }
        )
      }
    }
  }
}
