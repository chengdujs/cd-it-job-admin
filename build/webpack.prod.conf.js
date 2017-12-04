const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const shelljs = require('shelljs');
const baseConf = require('./webpack.base.conf');
const util = require('./util');

shelljs.rm('-rf', 'dist');

module.exports = webpackMerge(baseConf, {
  devtool: 'source-map',
  entry: {
    build: [
      'babel-polyfill',
      util.root('src/index.js')
    ]
  },
  module: {
    rules: [
      { test: /\.css$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) },
      { test: /\.styl$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!stylus-loader' }) }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false
      },
      sourceMap: true
    })
  ]
});
