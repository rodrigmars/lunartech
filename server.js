'use strict';
const express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  apiRoutes = require('./routes/estudantes'),
  path = require('path');

mongoose.connection.openUri('mongodb://localhost:27017/lunartechdb')
  .once('open', function() {

    console.log();

    app.use(express.static(__dirname));

    app.get('/*', function(req, res) {

      res.sendFile('app/index.html', { root: __dirname });
    });

  }).on('error', function(error) {
    console.log('error', error);
  });

var server = app.listen(3000, function() {
  console.log('App listening on port ', server.address().port);
});
