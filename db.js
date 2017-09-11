'use strict'

const moongose = require('mongoose'),
  config = require('./config'),
  logger = require('nodejslogger'),
  {
    db: {
      host,
      port,
      name
    }
  } = config,
  connectionString = `mongodb://${host}:${port}/${name}`;

mongoose.connection.openUri(connectionString)
  .on('error', function(error) {
    logger.error('MongoDB event error: ', error);
  })
  .once('open', function() {
    logger.info("Conexão estabelecida");
  });
