var express = require('express');
var app = express();
var database = {};

app.get('/', function(req, res) {
  res.send('Hello world!');
});

app.get('/set', function(req, res) {
  for (var key in req.query) {
    database[key] = req.query[key];
    console.log(key + ' has been set to ' + database[key]);
  }
  res.send(database);
});

app.get('/get', function(req, res) {
  res.send(database[req.query.key]);
});

app.listen(4000, function() {
  console.log('Listening on port 4000!');
});
