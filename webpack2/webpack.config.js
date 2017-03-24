const path = require('path');
const webpack = require('webpack');
// 提取特定文件的插件
// https://github.com/webpack-contrib/extract-text-webpack-plugin
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// 通过webpack处理html文件的插件，将所有处理过的js和css文件都注入到html文件中去
// 中文： http://www.cnblogs.com/haogj/p/5160821.html
// 英文： https://github.com/jantimon/html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        // index: "./src/js/index",
        main: "./src/js/main",
        vendor: "./static/js/jquery-3.2.0"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][hash].js',
        publicPath: "/",
    },
    resolve: {
        extensions: [".js", ".css", ".json", ".vue"],
        alias: {
            vue: "vue/dist/vue.js"
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            css: ExtractTextPlugin.extract({
                                use: "css-loader",
                                fallback: "vue-style-loader"
                            }),
                            less: ExtractTextPlugin.extract({
                                use: "css-loader!less-loader",
                                fallback: "vue-style-loader"
                            })
                        }
                    }
                }
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
                // use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.js$/,
                use: "babel-loader"
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: "[name].css",
        }),
        // 设置html的处理配置
        new HtmlWebpackPlugin({
            title: "My app",
            filename: "index.html",
            template: path.resolve(__dirname, "src", "index.html")
        })
    ]
}

module.exports = config;
