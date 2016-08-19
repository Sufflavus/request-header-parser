var express = require('express');
var Parser = require('./header-parser');

var app = express();
var parser = new Parser();

app.get('/', function (req, res) {
  var result = parser.parse(req);
  res.json(result);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});