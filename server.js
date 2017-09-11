'use strict';
const express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  apiRoutes = require('./routes/estudantes'),
  path = require('path'),
  logger = require('nodejslogger');

mongoose.connection.openUri('mongodb://localhost:27017/lunartechdb')
  .once('open', function() {

    app.use(express.static("app"));

    app.use('/', function(req, res, next) {

      res.sendFile('index.html', { root: path.join(__dirname, "app") }, function(err) {
        if (err) {
          logger.error("Erro:", err.stack);
          // next(err);
          res.status(500).json('Erro: ' + err);
        }
      });
    });

  }).on('error', function(error, res) {
    logger.error('MongoDB event error: ' + error);
  });

var server = app.listen(3000, function() {
  logger.info('App listening on port ', server.address().port);
});
