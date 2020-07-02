const path = require('path');
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

module.exports = {
  lintOnSave: false,

  css: {
    loaderOptions: {
        // 向 css-loader 传递 options
        css: {
            localsConvention: 'camelCaseOnly'
        }
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      // 对于 less，自动前置导入 patterns 中的文件。无需手动引用即可使用 less 变量和方法。
      preProcessor: 'less',
      patterns: [
          path.resolve(__dirname, 'src/theme/util.less')
      ]
    }
  },

  configureWebpack: {
      resolve: {
          alias: {
              "@ui-comp": path.resolve(__dirname,"src/ui-components"),
              "@lib": path.resolve(__dirname,"src/lib"),
              "@comp": path.resolve(__dirname,"src/components")
          }
      }
  },

  chainWebpack: (config) => {
     if (process.env.NODE_ENV === "production") {
         console.log('使用LodashModuleReplacementPlugin')
         config.plugin("loadshReplace").use(new LodashModuleReplacementPlugin());
     }
  }
}
