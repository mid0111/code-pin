const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = require('./base.config');

config.plugins.unshift(
  // Clean build folder(s) before building.
  new CleanWebpackPlugin(['server/public'], {
    root: path.join(__dirname, '..'),
  })
);

module.exports = config;
