const path = require('path');

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
  }
}
