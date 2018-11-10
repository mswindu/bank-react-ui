const path = require('path')

module.exports = {
  // Выполнять ли линтинг кода при сохранении во время разработки
  lintOnSave: process.env.NODE_ENV !== 'production',
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'index.html',
      // output as dist/index.html
      filename: 'index.html',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },
  chainWebpack: webpackConfig => {
    if (process.env.NODE_ENV === 'development') {
      devtool = '#eval-source-map'
    }
  }
}