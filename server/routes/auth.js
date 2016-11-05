const express = require('express');
const passport = require('../models/passport');
const Config = require('../Config');

const router = express.Router();

router.get('/github', passport.authenticate('github'));

router.get('/github/callback', passport.authenticate('github'), (req, res) => {
  // console.log(req.user);
  res.redirect(`${Config.baseUrl}/`);
});

module.exports = router;
