const passport = require('passport');
const Strategy = require('passport-github').Strategy;
const Config = require('../Config');

passport.use(new Strategy({
  clientID: Config.github.clientId,
  clientSecret: Config.github.clientSecret,
  callbackURL: Config.github.callbackUrl,
}, (accessToken, refreshToken, profile, cb) =>
   cb(null, profile)
));

// Configure Passport authenticated session persistence.
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

module.exports = passport;
