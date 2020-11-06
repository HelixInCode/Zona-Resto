const path = require('path')

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'entryPoints JS/index.js'),
    index_results: path.resolve(__dirname, 'entryPoints JS/index_results.js'),
    publicacion: path.resolve(__dirname, 'entryPoints JS/publicacion.js'),
    pedido_apunto: path.resolve(__dirname, 'entryPoints JS/pedido_apunto.js'),
    ayuda: path.resolve(__dirname, 'entryPoints JS/ayuda.js'),
    ayuda_socios: path.resolve(__dirname, 'entryPoints JS/ayuda_socios.js'),
    panel_socios: path.resolve(__dirname, 'entryPoints JS/panel_socios.js'),
    registro_socios: path.resolve(__dirname, 'entryPoints JS/registro_socios.js'),
    planes_promocion: path.resolve(__dirname, 'entryPoints JS/planes-promocion.js')
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
      },
      {
        test: /\.(jpg|jpeg|png|gif|woff|eot|ttf|svg|mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      }
    ]
  },
}