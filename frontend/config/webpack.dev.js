var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        sourceMapFilename: '[file].map'
    },

    plugins: [
        new ExtractTextPlugin('[name].css')
    ],

    devServer: {
        port: 9000,
        proxy: {
            "/ws/rest": "http://localhost:8080",
            "/dologin": "http://localhost:8080",
            "/dologout": "http://localhost:8080",
            "/webclient/**": {
                target: "http://localhost:9000",
                pathRewrite: {"^/webclient": ""}
            }
        }
    }
});
