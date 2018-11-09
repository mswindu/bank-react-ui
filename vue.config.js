const path = require('path')

module.exports = {
  lintOnSave: false,
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
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve('src'),
        'src': path.resolve('src'),
        'components': path.resolve('src/components')
      }
    },
    devtool: '#eval-source-map'
  }
}