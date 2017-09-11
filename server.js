'use strict';

const express = require('express'),
  app = express(),
  logger = require('nodejslogger'),
  config = require('./config'),
  apiRoutes = require('./routes/estudantes'),
  {
    app: {
      port,
      file,
      path
    },
  } = config;

app.use(express.static("app"));

app.use('/', function(req, res, next) {

  res.sendFile(file, { root: path }, function(error) {
    if (error) {
      logger.error(`Erro:  ${error}`);
      next(error);
    }
  });
});

app.listen(port, function() {
  logger.info(`App listening on port port ${port}`);
});
