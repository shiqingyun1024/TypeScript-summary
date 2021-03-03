// 因为webpack是基于node，所以遵循commonjs规范
const {resolve} = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    // 入口文件
    entry: './src/index.ts',
    // 出口文件
    output:{
        filename:'js/main.js',
        path:resolve(__dirname,'build')
    },
    // loader的配置
    module:{
        rules:[
            {
                // test指定的是规则生效的文件
                test:/\.ts$/,
                // 要使用的loader
                loader:'ts-loader',
                // 要排除的文件
                exclude: /node-modules/
            }

        ]
    },
    // plugins 插件的配置
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })

    ],
    // 用来设置引用模块
    resolve:{
       extensions:['.ts','.js']
    },
    // 模式
    mode:"development",

}