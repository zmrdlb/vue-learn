module.exports = ({env}) => {
    console.log('postcss.config.js读取env：',env);
    // 'cssnano': env === 'production' ? options.cssnano : false
    // https://cssnano.co/

    return {
        plugins: [
            // https://github.com/csstools/postcss-preset-env
            require('postcss-preset-env'),

            // postcss-preset-env 已经包含了 autoprefixer，所以不需要再添加了
            // vue-cli 本来默认开启了 autoprefixer。但 postcss.config.js 会覆盖默认设置，则此处重新加上。
            // require('autoprefixer'),

            // 将 px 转换成 rem
            // 设置了不进行转换的属性和选择器。如果在这些条件下有些例外，则调用 less function: .lib-px-to-rem(...) 进行手动转换
            require('postcss-pxtorem')({
                rootValue: 16,
                propList: ['*','!min-*','!max-*'], //不对 min-width,min-height,max-width,max-height 转换。
                // use-px 的使用方式。如 .g-modal-infor, .use-px {...}
                // use-px 只做占位符，表面不对声明的属性进行转换，实际不使用。
                selectorBlackList: ['use-px',/^html$/] // 包含指定字符的选择器，pxtorem将不对其定义的css转换，保留px
            })
        ]
    }
}
