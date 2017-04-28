const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const util = require('./util');

const baseConfig = require('./webpack.base.conf');

module.exports = webpackMerge(baseConfig, {
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:12346',
      'webpack/hot/only-dev-server',
      baseConfig.entry.app
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    host: 'localhost',
    port: 12346,
    historyApiFallback: true,
    hot: true,
    open: true
  }
});
