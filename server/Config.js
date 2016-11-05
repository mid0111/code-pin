module.exports = {
  github: {
    clientId: process.env.CLIENT_ID || 'clientId',
    clientSecret: process.env.CLIENT_SECRET || 'clientSecret',
    callbackUrl: 'http://localhost:3000/auth/github/callback',
  },
};
