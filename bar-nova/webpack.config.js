const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  target: 'web',
  node: {
    fs: 'empty',
    module: 'empty'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'client.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['.js', '.vue']
  }
}
