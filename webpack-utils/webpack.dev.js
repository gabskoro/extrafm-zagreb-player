const commonPaths = require('./common-paths');

const config = {
  devtool: 'eval',
  mode: 'development',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(svg|png)$/,
        use: {
          loader: 'file-loader',
          options: {
              name: '[name].[ext]',
              outputPath: commonPaths.imagesOutputPath,
              esModule: false
          }
        }
      }
    ]
  }
}

module.exports = config;
