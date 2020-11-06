const path = require('path')
const common = require('./webpack.config')
const merge = require('webpack-merge')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, '../../dist/js/webpack'),
    filename: '[name].js'
  },
  mode: 'development',
  module:{
    rules:[
      {
        test: /\.css$/,
        use:[
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options:{
              importLoaders: 1,
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '../../css/webpack/[name].css'
    })
  ]
})