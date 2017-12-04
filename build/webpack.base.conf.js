const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const util = require('./util');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'react-router-dom', 'redux', 'react-redux']
  },
  output: {
    path: util.root('dist'),
    publicPath: '',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file-loader?name=assets/[name].[hash].[ext]' }
    ]
  },
  plugins: [
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      template: util.root('index.html'),
      showErrors: true,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor'],
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    new ExtractTextPlugin({ filename: '[name].[hash].css', disable: false, allChunks: true })
  ]
};
