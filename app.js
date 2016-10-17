var express = require('express');
var app = express();
var database = {};

app.get('/', function(req, res) {
  res.send('Hello world!');
});

app.get('/set', function(req, res) {
  res.send(req.query);
});

app.listen(4000, function() {
  console.log('Listening on port 4000!');
});
