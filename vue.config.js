const path = require('path')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

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
    webpackConfig.resolve.alias
      .set('@utils', path.resolve('src/utils'))

    webpackConfig
      .plugin('VuetifyLoaderPlugin')
      .use(VuetifyLoaderPlugin)

    if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
      webpackConfig
        .devtool('#eval-source-map')
    }
  }
}
