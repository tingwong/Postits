var webpack = require('webpack');
var DashboardPlugin = require('webpack-dashboard/plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/app.js'],
  output: {
    path: './build',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.(css)|(scss)$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
  ]
},
devtool: 'source-map',
devServer: {
  contentBase: './build',
  historyApiFallback: true,
  hot: true,
  inline: true,
  port: 8081
},
plugins: [
  new webpack.HotModuleReplacementPlugin({
    multiStep: true
  }),
  new DashboardPlugin(),
  new ExtractTextPlugin("bundle.css")
]
};
