var express = require('express');
var Parser = require('./header-parser');

var app = express();
var parser = new Parser();

app.get('/', function (req, res) {
  var result = parser.parse(req);
  res.json(result);
});

var port = process.env.PORT || 1024;

app.listen(port, function () {
  console.log('Listening on ' + port);
});