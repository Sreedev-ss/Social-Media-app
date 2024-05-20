const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const createServer = () => {
  const app = express();

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  return app;
}

module.exports = createServer;