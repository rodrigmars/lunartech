const express = require('express'),
  app = express(),
  calcs = require("./models/calcs");

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
