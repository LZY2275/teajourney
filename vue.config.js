const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.132.202:5000/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  publicPath: './',
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: {
            autoprefixer: {
              flexbox: 'no-2009'
            }
          }
        }
      }
    }
  }
})
