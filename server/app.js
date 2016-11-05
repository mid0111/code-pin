const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// var favicon = require('serve-favicon');
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Initialize Passport and restore authentication state, if any, from the session.
const passport = require('./models/passport');

app.use(passport.initialize());
app.use(passport.session());

const routes = require('./routes/index');

app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

/* eslint-disable no-unused-vars */
app.use((err, req, res, next) => {
  /* eslint-enable */

  const response = {
    error: {
      message: err.message,
    },
  };

  if (app.get('env') === 'development') {
    // development error handler will print stacktrace
    response.error.detail = err;
  }

  res.status(err.status || 500);
  res.json(response);
});

module.exports = app;
