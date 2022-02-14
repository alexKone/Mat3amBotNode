const path = require('path');

module.exports = {
  entry: {
    main: './assets/js/main.js',
    login: './assets/js/login.js',
    signup: './assets/js/signup.js',
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader']
      }
    ]
  }
}
