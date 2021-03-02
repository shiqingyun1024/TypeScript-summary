// 因为webpack是基于node，所以遵循commonjs规范
const {resolve} = require("path")
module.exports = {
    // 入口文件
    entry: './src/js/index.js',
    // 出口文件
    output:{
        filename:'js/main.js',
        path:resolve(__dirname,'build')
    },
    // loader的配置
    module:{
        rules:[

        ]
    },
    // plugins 插件的配置
    plugins:[

    ],
    // 模式
    mode:"development"
}