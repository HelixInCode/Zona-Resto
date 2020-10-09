const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'entryPoints JS/index.js'),
    index_results: path.resolve(__dirname, 'entryPoints JS/index_results.js'),
    publicacion: path.resolve(__dirname, 'entryPoints JS/publicacion.js'),
    pedido_apunto: path.resolve(__dirname, 'entryPoints JS/pedido_apunto.js'),
    ayuda: path.resolve(__dirname, 'entryPoints JS/ayuda.js'),
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
            presets: ['es2015']
          }
        }
      },
      
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
          options: {
           limit: 100000
          }
        }
      },
      
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          // use: ['style-loader', 'css-loader']
          // use: 'css-loader'
          use: [
            {
              loader: 'css-loader',
              options:{
                modules: false,
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        })
      }
    ]
      
  },
  plugins: [
    new ExtractTextPlugin('../../css/webpack/[name].css')
  ]
}