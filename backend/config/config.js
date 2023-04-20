const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const sessionConfig = require('./sessionCon');
const ssr = require('../middleware/user');
const { resLocals, getUser } = require('../middleware/user');

function config(app) {
  app.use(session(sessionConfig));
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(morgan('dev'));
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(ssr);
  app.use(resLocals);
  app.use(getUser);
  app.disable('x-powered-by');
}

module.exports = config;
