const express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  apiRoutes = require('./routes/estudantes');

console.log("chegando aqui");
mongoose.connection.openUri('mongodb://localhost:27017/lunartechdb')
  .once('open', function() {

    // app.use('/api', apiRoutes);

    app.use('/app', express.static(__dirname + './app'));

    // app.use('/app', express.static(__dirname + '/app'));

    app.get('/*', function(req, res) {
      // res.sendFile(__dirname + '/app/index.html');

      // res.sendFile(__dirname + '/app/index.html');
      res.sendFile('index.html', { root: __dirname + "/app" });
    });

    // app.use('/', function(req, res, next) {

    //injeta coordenadas para teste
    // res.coordenadas = {
    //   code: "A1521324"
    // };

    // setTimeout(function() {
    //   if (!calcs.acesso(res.token)) {
    //     res.json({ message: "Acesso negado" })
    //   } else { next(); }
    // }, 3000);
    // });


  }).on('error', function(error) {
    res.status(500).json({
      message: 'Connection error: ' + error
    });
  });

var server = app.listen(3000, function() {
  // debug('Express server listening on port' + port);
  console.log('App listening on port ', server.address().port);
});
