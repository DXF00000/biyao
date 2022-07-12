const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    proxy: {
      "/api": {
        target: "http://192.168.205.54:9527",
        changeOrigin: true,
        // 如果在报错误,说明请求数据未拦截到
        pathRewrite: {
          // "^/api": ""
        }
      },
      // "/classify": {
      //   target: "http://www.biyao.com",
      //   changeOrigin: true,
      //   pathRewrite: {
      //     "^/classify": ""
      //   }
      // }
    }
  }
})

