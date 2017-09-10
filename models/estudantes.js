'use strict';
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const EstudantesSchema = new Schema({
  name: String,
  code: Number
});

const estudantesSchema = mongoose.model('estudantes', EstudantesSchema);

module.exports = estudantesSchema;
