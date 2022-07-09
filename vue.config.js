const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    proxy: {
      "/api": {
        target: "http://192.168.205.54:9527",
        changeOrigin: true,
        // pathRewrite: {
        //   "^/x": ""
        // }
      },
      "/classify": {
        target: "http://www.biyao.com",
        changeOrigin: true,
        pathRewrite: {
          "^/classify": ""
        }
      }
    }
  }
})

