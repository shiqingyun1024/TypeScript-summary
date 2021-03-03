// 因为webpack是基于node，所以遵循commonjs规范
const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    // 入口文件
    entry: './src/index.ts',
    // 出口文件
    output: {
        filename: 'js/main.js',
        path: resolve(__dirname, 'build')
    },
    // loader的配置
    module: {
        rules: [
            {
                // test指定的是规则生效的文件
                test: /\.ts$/,
                // 要使用的loader
                use: [
                    /*
              js的兼容性处理-- babel-loader @babel/core @babel/preset-env,然后下面是三种解决兼容性的方案，分别下载不同的包
              1、基本的js兼容性处理 ---> @babel/preset-env
                 问题：只能转换基本语法，如prmise等高级语法不能转换
              2、全部js兼容性处理 --> @babel/polyfill，直接引入即可，不需要配置 ====因为体积太大了，所以实际开发时用的很少。
                 问题：我只要解决部分兼容性问题，但是将所有兼容性代码全部引入，体积太大了~
              3、需要做兼容性的就做：按需加载。 --> core-js

              最终的做法是结合1、3这两步，1是处理基本语法，3是处理高级语法。
            */
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
                    'ts-loader',
                ],

                // 要排除的文件
                exclude: /node-modules/
            }
        ]
    },
    // plugins 插件的配置
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })

    ],
    // 用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    },
    // 模式
    mode: "development",

}