// webpack是基于node的，所以遵循commonjs规范
const { resolve } = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 从js中抽取css，抽到css文件中
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    // 入口文件
    entry: './src/index.ts',
    // 出口文件
    output: {
        filename: 'js/index.js',
        path: resolve(__dirname, 'build'),
        // 告诉webpack不使用箭头函数
        environment:{
            // 不使用箭头函数(会转化为普通函数)主要是考虑到兼容性，主要是IE
            arrowFunction:false,
            // 不使用const（会转化为var）主要是考虑到兼容性，主要是IE
            const:false
        }
    },

    // loader的配置 配置ts-loader babel-loader等
    module: {
        rules: [
            // 处理ts的配置
            {
                // test指定的是规则生效的文件
                test: /\.ts$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            // 预设：指示babel做怎样的兼容性处理。
                            presets: [
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
                exclude: /node-modules/
            },
            // 处理scss 和 css的配置
            {
                test: /\.less$/,
                use: [
                    // 'style-loader',
                    // MiniCssExtractPlugin.loader用于把css从js中抽离出来，抽取到css文件里面，所以就用不到style-loader了。
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    // 处理css的兼容性
                    {
                        loader: 'postcss-loader'
                    },
                    'less-loader'
                ]
            }
        ]
    },

    // plugins 插件的配置
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['build']
        }),
        // 提取js文件的css
        new MiniCssExtractPlugin({
            // 对输出的文件进行重新命名
            filename: 'css/built.css'
        })
    ],

    resolve: {
        // 配置省略文件路径的后缀名，在文件中引入其他文件的时候可以省略文件名后缀
        extensions: ['.js', '.json', '.ts']
    },

    // 模式
    mode: "development"

}