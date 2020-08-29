module.exports = {
  plugins: [
    require('postcss-cssnext')({
      features: {
        autoprefixer: {
          flexbox: false,
          grid: false,
        },
        customProperties: false,
        calc: false,
      }
    })
  ]
}