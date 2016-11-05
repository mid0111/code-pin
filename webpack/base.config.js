const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  context: path.join(__dirname, '../client'),

  entry: './index.jsx',

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.css'],
  },

  output: {
    path: './server/public',
    filename: 'scripts/bundle.js',
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css'),
    }, {
      test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
      loader: 'url',
    }],
  },

  plugins: [
    // Copy static resources.
    new CopyWebpackPlugin([
      {
        from: '**/*.html',
        to: path.join(__dirname, '../server/public'),
      },
    ]),
    new ExtractTextPlugin('styles/bundle.css'),
  ],
};
