const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = require('./base.config');

config.plugins.unshift(
  new webpack.DefinePlugin({
    'process.env':{
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  // Clean build folder(s) before building.
  new CleanWebpackPlugin(['server/public'], {
    root: path.join(__dirname, '..'),
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
);

module.exports = config;
