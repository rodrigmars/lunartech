'use strict';
const
  express = require('express'),
  router = express.Router(),
  bodyParser = require('body-parser'),
  logger = require('nodejslogger'),
  db = require('../db');

// GET - Retorna lista de alunos
router.get('/alunos', function(req, res, next) {

  db.Alunos.find().then(function(doc) {
    req.status(200).json(doc);

  }).catch(function(err) {
    return req.status(500).json(err);
  });
});

// GET - Retorna Aluna por Id
router.get('/alunos/:id', function(req, res, next) {

  // db.Alunos.find()
  //   .exec(function(err, doc) {
  //     if (err) {
  //       req.status(200).send("Registro não localizado");
  //     } else {
  //       req.status(200).json(doc);
  //     }
  //   });

  db.Alunos.findOne({ _id: req.params.id })
    .exec(function(err, doc) {
      if (err) {
        req.status(200).send("Registro não localizado");
      } else {
        console.debug(`${doc}`);
        req.status(200).json(doc);
      }
    });


  db.Alunos.find()
    .then(function(doc) {
      req.status(200).json({ alunos: doc });
    });
});


// db.Alunos.find({ nome: 'Hadassa', idade: 22 }, function(err, aluno) {
//   if (err) {
//     logger.error("err", err);
//   } else {
//     logger.debug("aluno", aluno);
//   }
// });


// POST - Cadastra novo aluno 
router.post('/alunos', function(req, res, next) {

  let aluno = new db.Alunos({
    nome: req.body.nome,
    idade: req.body.idade,
    telefone: req.body.telefone,
  });

  aluno.save(function(err, doc) {
    if (err) {
      return console.error(`Registro não localizado - Error: ${err}`);
    }
    res.redirect('/');
  });
});

// PUT - Atualiza aluno 
router.put('/alunos/:id', function(req, res, next) {

  console.debug(`req.body: ${req.body}`);

  db.Alunos.findById(req.body.id, function(err, aluno) {
    if (err) {
      console.error(`Registro não localizado - Error: ${err}`);
    }
    aluno.nome = req.body.nome;
    aluno.save();
    res.redirect('/');
  });
});

// DELETE - Remove aluno
router.delete('/alunos/:id', function(req, res, next) {

  console.debug(`Objeto Aluno: ${aluno}`);

  db.Alunos.findByIdAndRemove(req.body.id).exec();

  res.redirect('/');
});

module.exports = router;
