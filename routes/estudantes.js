const express = require('express'),
  router = express.Router(),
  Estudantes = require('../models/estudantes');


router.get('/api/estudantes', function(req, res) {
  console.log("chegou aqui>>>>>>>>>>>>>>>>>>>>>>>");



  res.json({ logMessage: 'Retornam todos os estudantes' });

  // Estudantes.find(function(err, estudantes) {
  //   if (err) {
  //     res.status(404).json({
  //       error: 'Não existem registros para esta consulta'
  //     });
  //   } else {
  //     res.json({ data: estudantes });
  //   }
  // });
});

router.get('/api/estudantes/:id/edit', function(req, res) {
  res.json({ logMessage: 'Retornam estudante por id' });

  // Estudantes.findById({ _id: req.params.id }, function(err, estudantes) {
  //   if (err) {
  //     res.status(404).json({
  //       error: 'Não existem registros para esta consulta'
  //     });
  //   } else {
  //     res.json({ data: estudantes });
  //   }
  // });
});

router.put('/api/estudantes/:id/edit', function(req, res) {
  res.json({ logMessage: 'Edita estudante por id' });
  // Estudantes.findById(req.params.id, function(err, estudantes) {
  //   // atualiza
  //   estudantes.update({ name: res.body.name }, function(err, estudantes) {
  //     res.redirect("/api/estudantes/" + estudantes._id);
  //   });
  // });
});

// router.post('/api/estudantes', function(req, res) {
//   Estudantes.create(req.estudantes, function(error) {
//     if (error) {
//       res.status(500).send('unknown error');
//     } else {
//       res.location("blobs");
//       // And forward to success page
//       res.redirect("/blobs");
//     }
//   })
// });

module.exports = router;
