const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
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
