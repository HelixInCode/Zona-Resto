const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack')

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'entryPoints JS/index.js'),
    index_results: path.resolve(__dirname, 'entryPoints JS/index_results.js'),
    publicacion: path.resolve(__dirname, 'entryPoints JS/publicacion.js'),
    pedido_apunto: path.resolve(__dirname, 'entryPoints JS/pedido_apunto.js'),
    ayuda: path.resolve(__dirname, 'entryPoints JS/ayuda.js'),
    ayuda_socios: path.resolve(__dirname, 'entryPoints JS/ayuda_socios.js'),
    panel_socios: path.resolve(__dirname, 'entryPoints JS/panel_socios.js'),
    registro_socios: path.resolve(__dirname, 'entryPoints JS/registro_socios.js')
  },
  output: {
    path: path.resolve(__dirname, '../../dist/js/webpack'),
    filename: '[name].js'
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      
      {
        test: /\.(jpg|png|jpeg|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
           limit: 1000000
          }
        }
      },
      
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
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
      minSize: 0,
      name: 'common',
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../../css/webpack/[name].css'
    }),
  ]
}