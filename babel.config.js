const prodPlugins = [];

if (process.env.NODE_ENV === 'production') {
    prodPlugins.push('transform-remove-console')
}

module.exports = {
    presets: ["@vue/cli-plugin-babel/preset"],
    plugins: [
        [
            "component",
            {
                libraryName: "element-ui",
                styleLibraryName: "theme-chalk"
            }
        ],
        // 展开运算符,发布产品时候的插件数组
        // 'transform-remove-console',
        ...prodPlugins

    ]
};
