// webpack是基于node的，所以遵循commonjs规范
const {resolve} = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
module.exports = {
    // 入口文件
    entry:'./src/index.js',
    // 出口文件
    output:{
        filename:'js/index.js',
        path:resolve(__dirname,'build')
    },

    // loader的配置 配置ts-loader babel-loader等
    module:{
        rules:[
            {
                // test指定的是规则生效的文件
                test: /\.ts$/,
                use:[
                    {
                       loader:'babel-loader',
                       options:{
                           // 预设：指示babel做怎样的兼容性处理。
                           presets:[
                               [
                                   '@babel/preset-env',
                                   {
                                    // 按需加载
                                    useBuiltIns: 'usage',//指定按需加载
                                    // 指定core-js版本
                                    corejs: {
                                        version: 3
                                    },
                                    // 指定兼容性做到哪个版本浏览器
                                    targets: {
                                        chrome: '60',
                                        firefox: '60',
                                        ie: '9',
                                        safari: '10',
                                        edge: '17'

                                    }
                                }
                               ]
                           ]
                       }
                    },
                    'ts-loader'
                ],
                exclude:/node-modules/
            }

        ]
    },

    // plugins 插件的配置
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns:['build']
        })
    ],

    resolve:{
       // 配置省略文件路径的后缀名，在文件中引入其他文件的时候可以省略文件名后缀
       extensions:['.js','.json','.ts']
    },

    // 模式
    mode: "development"

}