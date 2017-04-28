const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const util = require('./util');

module.exports = {
  entry: {
    app: util.root('src/main'),
    vendor: [
      'react',
      'react-dom'
    ]
  },
  stats: 'minimal',
  output: {
    path: util.root('dist'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  resolve: {
    extensions: ['.js'],
    alias: {}
  },
  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader?cacheDirectory=true'], exclude: /node_modules/ },
      { test: /\.html$/, use: 'html-loader' },
      { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file-loader?name=assets/[name].[hash].[ext]' },
      { test: /\.css$/, use: ExtractTextPlugin.extract({ use: 'css-loader' }) },
      { test: /\.styl$/, use: ExtractTextPlugin.extract({ use: 'css-loader!stylus-loader' }) }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor']
    }),
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      template: util.root('src/index.html')
    })
  ]
};
