'use strict';

var express = require('express')
  , app = express()
  , parser = require('body-parser');

// Configuration
app.use(parser.json());


var port = process.env.PORT || 3000;

var sourcesApi = require('./api/sources');
app.use('/v1/sources', sourcesApi);

var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
