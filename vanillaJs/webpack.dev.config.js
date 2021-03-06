const webpack = require('webpack');
const config = require('./webpack.config.js');
const merge = require('webpack-merge');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = merge(config, {
    entry : './src/index.js',
    mode:'development',
    devtool: false,
    module : {
        rules : [
        ]
    },
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'public/index.html'
        }),
        new webpack.SourceMapDevToolPlugin({})
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true,
        open: true,
        inline: true,
        watchContentBase: true
    }
})