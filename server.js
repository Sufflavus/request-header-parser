var express = require('express');
var app = express();

app.get('/', function (req, res) {
  var ip = req.get('x-forwarded-for');
  var language = req.acceptsLanguages()[0];
  
  res.json({
    "ipaddress": ip,
    "language": language,
    "software": req.headers['user-agent']
  });
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});