const commonPaths = require('./common-paths');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    devServer: {
        port: 3001,
        host: "0.0.0.0",
        compress: true,
        historyApiFallback: true,
        hot: true
    },
    entry: './app/index.js',
    output: {
        path: commonPaths.outputPath
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            }
        ]
    },
    resolve: {
        modules: commonPaths.modulesPath,
        alias: {
            'vue$': commonPaths.vuePath
        }
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './app/index.html'
        })
    ]
}

module.exports = config;
