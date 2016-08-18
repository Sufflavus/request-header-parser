var express = require('express');

var app = express();

app.get('/', function (req, res) {
  var ip = req.get('x-forwarded-for');
  var language = req.acceptsLanguages()[0];
  var agent = req.headers['user-agent'];
  var rex = /\((.*?)\)/g;
  var maches = rex.exec(agent);
  var os = maches[0].split('(')[1].split(')')[0];
  
  res.json({
    "ipaddress": ip,
    "language": language,
    "software": os
  });
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});