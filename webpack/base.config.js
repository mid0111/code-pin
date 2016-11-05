const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  context: path.join(__dirname, '../client'),

  entry: './index.js',

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
  },

  output: {
    path: './server/public/scripts',
    filename: 'bundle.js',
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
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
  ],
};
