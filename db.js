'use strict'

const mongoose = require('mongoose'),
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

const alunosSchema = mongoose.Schema({
  nome: String,
  idade: { type: Number, min: 18, max: 65 },
  nota: { type: Number, max: 10 },
  cpf: String,
  dataNascimento: { type: Date },
  email: { type: String, lowercase: true },
  cep: String,
  telefone: String
});

let Alunos = mongoose.model('alunos', alunosSchema);

module.exports = {
  Alunos: Alunos
};
