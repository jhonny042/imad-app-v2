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
app.get('/ui/p.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'p.jpg'));
});
app.get('/ui/panchambro1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'panchambro1.jpg'));
});
app.get('/ui/panchambro2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'panchambro2.jpg'));
});
app.get('/ui/panchambro3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'panchambro3.jpg'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
