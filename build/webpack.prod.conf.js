const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const util = require('./util');
const baseConfig = require('./webpack.base.conf');

module.exports = webpackMerge(baseConfig, {
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false
    })
  ]
});
