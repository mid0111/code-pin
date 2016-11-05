const config = require('./base.config');

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
