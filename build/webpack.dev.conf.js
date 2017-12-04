const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConf = require('./webpack.base.conf');
const util = require('./util');

module.exports = webpackMerge(baseConf, {
  devtool: 'eval-source-map',
  entry: {
    build: [
      'babel-polyfill',
      'react-hot-loader/patch',
      util.root('src/index.js')
    ]
  },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js'
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.styl$/, use: ['style-loader', 'css-loader', 'stylus-loader'] }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ],
  devServer: {
    host: 'localhost',
    port: 7778,
    open: true,
    hot: true,
    historyApiFallback: true
  }
});
