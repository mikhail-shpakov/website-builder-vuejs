module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/website-builder-vuejs/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/style/variables.sass"'
      }
    }
  },
  pwa: {
    name: 'Конструктор',
    themeColor: '#FFFFFF',
    msTileColor: '#FFFFFF',
    manifestOptions: {
      background_color: '#FFFFFF'
    }
  }
}
