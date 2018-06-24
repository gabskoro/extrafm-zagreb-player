const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Webpack = require('webpack');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const commonPaths = require('./common-paths');

const config = {
    devtool: 'source-map',
    mode: 'production',
    output: {
        filename: 'bundle.[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(svg|png)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: commonPaths.imagesOutputPath
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin('bundle.[hash].css'),
        new Webpack.optimize.ModuleConcatenationPlugin(),
        new UglifyJsPlugin({
            sourceMap: true
        }),
        new OptimizeCSSAssetsPlugin({
            cssProcessorOptions: {
                map: {
                  inline: false
                }
            }
        }),
        // Stripping logs/warnings from vue
        new Webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"' }})
    ]
}

module.exports = config;
