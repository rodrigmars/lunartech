'use strict'
const
  path = require('path'),
  config = {
    app: {
      port: 3000,
      file: 'index.html',
      path: path.join(__dirname, "app")
    },
    db: {
      host: 'localhost',
      port: 27017,
      name: 'lunartech'
    }
  };

module.exports = config;
