'use strict';

var express = require('express');

var router = express.Router();

router.get('/', function (req, res, next) {
  return res.send([
    {
      name: 'Oracle DB 1',
      connection: 'Oracles awesome connection string',
      isActive: true
    }
  ]);
});


module.exports = router;
