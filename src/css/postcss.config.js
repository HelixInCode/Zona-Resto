module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-cssnext')({
      features: {
        autoprefixer: {
          flexbox: false,
          grid: false,
        },
        customProperties: false,
        calc: false,
      }
    }),
    require('css-mqpacker'),
    // require('cssnano')
  ]
}