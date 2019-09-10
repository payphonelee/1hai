const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        pages: path.resolve(__dirname, './src/pages'),
        assets: path.resolve(__dirname, './src/assets'),
        styles: path.resolve(__dirname, './src/assets/styles'),
        components: path.resolve(__dirname, './src/components'),
        utils: path.resolve(__dirname, './src/utils')
      }
    }
  },

  devServer: {
    proxy: {
      '/Navigate': {
        target: 'https://m.1hai.cn',
        changeOrigin: true
      }
    }
  }
}