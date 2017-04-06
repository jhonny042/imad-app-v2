var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/calc', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'calc.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/mukul.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'mukul.jpg'));
});
app.get('/ui/rubina.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'rubina.jpg'));
});
app.get('/ui/rubina2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'rubina2.jpg'));
});
app.get('/ui/rubina3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'rubina3.jpg'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
