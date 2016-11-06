const config = require('./base.config');

// Enable sourcemaps for debugging webpack's output.
config.devtool = 'eval-cheap-module-source-map';

config.output.publicPath = '/';

config.devServer = {
  outputPath: config.output.path,

  proxy: {
    '/auth': {
      target: 'http://localhost:3000/',
    },
    '/api': {
      target: 'http://localhost:3000/',
    },
  },
};

module.exports = config;
