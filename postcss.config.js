module.exports = {
  plugins: [
    require('postcss-cssnext')({
      autoprefixer:{
        features: {
          grid: false,
          grid: false
        }
      },
      customProperties: false,
    })
  ]

}