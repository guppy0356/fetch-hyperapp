const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: path.resolve(__dirname, "index.js"),
  output: {
      filename: 'bundle.js'
  },
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true
  },
  plugins: [
    new Dotenv({path: path.resolve(__dirname, ".env"), safe: false})
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
}
