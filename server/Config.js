const domain = process.env.DOMAIN || 'http://localhost:3000';

const Config = {
  // base url for redirect
  baseUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : '',
  domain,
  github: {
    clientId: process.env.CLIENT_ID || 'clientId',
    clientSecret: process.env.CLIENT_SECRET || 'clientSecret',
    callbackUrl: `${domain}/auth/github/callback`,
  },
};

module.exports = Config;
