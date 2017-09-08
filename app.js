const express = require('express'),
  app = express(),
  calcs = require("./models/calcs"),
  mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/lunartech');

mongoose.connection.once('open', function() {
  console.log('Connection open');
}).on('error', function(error) {
  console.log('Connection error', error);
});

// const port = process.env.PORT || 3000;

app.use('/', function(req, res, next) {

  //injeta code para teste
  res.coordenadas = {
    code: "A1521324"
  };

  setTimeout(function() {
    if (!calcs.verificaAcesso(res.token)) {
      res.json({ message: "Acesso negado" })
    } else { next(); }
  }, 3000);

});

app.get('/', function(req, res) {
  res.json({ message: "Teste sendo realizado." });
});

var server = app.listen(3000, function() {
  // debug('Express server listening on port' + port);
  console.log('App listening on port ' + port);
});
