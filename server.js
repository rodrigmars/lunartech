'use strict';

const express = require('express'),
  app = express(),
  logger = require('nodejslogger'),
  config = require('./config'),
  bodyParser = require('body-parser'),
  route = require('./routes/alunos'),
  {
    app: {
      port,
      file,
      path
    },
  } = config;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', route);

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

  logger.info(`PORTA: ${port}`);
  logger.info(`ARQUIVO: ${file}`);
  logger.info(`PATH: ${path}`);
  logger.info(`App listening on port port ${port}`);

});
