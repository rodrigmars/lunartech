const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const LunarCharSchema = new Schema({
  name: String,
  code: Number
});

const LunarChar = mongoose.model('lunartech', LunarCharSchema);

module.exports = LunarChar;
