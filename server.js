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
app.get('/panchambro', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bro1.html'));
});
app.get('/bro2', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bro2.html'));
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
app.get('/ui/panchambro4.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'panchambro4.jpg'));
});
app.get('/ui/panchambro5.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'panchambro5.jpg'));
});
app.get('/ui/panchambro6.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'panchambro6.jpg'));
});
app.get('/ui/panchambro7.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'panchambro7.jpg'));
});
app.get('/ui/panchambro8.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'panchambro8.jpg'));
});
app.get('/ui/panchambro9.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'panchambro9.jpg'));
});
app.get('/ui/panchambro10.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'panchambro10.jpg'));
});
app.get('/ui/panchambro11.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'panchambro11.jpg'));
});
app.get('/ui/panchambro12.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'panchambro12.jpg'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
