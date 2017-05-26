// http://localhost:8080/webpack-dev-server

// https://webpack.js.org/configuration/
let webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, "client/"),
    // https://www.npmjs.com/package/webpack-hot-middleware
    entry: {
        app: ["./js/app.js"]
    },
    // webpack-dev-server runs in memory by design https://github.com/webpack/webpack/issues/1736
    // https://webpack.github.io/docs/webpack-dev-server.html
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/", // path.join(__dirname, 'assets/'),
        // filename: "bundle.js"
        filename: "[name].js?[hash]",
        chunkFilename: '[name].js?[hash]',
        sourceMapFilename: '[file].map'
    },
    devtool: 'source-map',
    devServer: {
        inline: true, // equivalent to `--inline` flag
        contentBase: 'assets/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        // https://github.com/babel/babel-loader#installation
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "client/js")
                ],
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                use: [{
                    loader: 'react-hot-loader'
                }, {
                    loader: 'babel-loader',
                    options: {
                        babelrc: true,
                        presets: [
                            'env',
                            'es2015',
                            'stage-0',
                            'react'
                        ]
                    }
                }]
            }
        ]
    },
    // https://github.com/jantimon/html-webpack-plugin
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Content Downloader2',
            filename: 'index.html',
            inject: 'body',
            template: 'templates/index.html'
        })
    ]
};