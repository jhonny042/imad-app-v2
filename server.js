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
app.get('/dhonduits4u', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'dhondu1.html'));
});
app.get('/dhondu2', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'dhondu2.html'));
});
app.get('/dhondu3', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'dhondu3.html'));
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
app.get('/ui/d1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'd1.jpg'));
});
app.get('/ui/d2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'd2.jpg'));
});
app.get('/ui/d3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'd3.jpg'));
});
app.get('/ui/d4.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'd4.jpg'));
});
app.get('/ui/d5.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'd5.jpg'));
});
app.get('/ui/d6.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'd6.jpg'));
});
app.get('/ui/d7.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'd7.jpg'));
});
app.get('/ui/d8.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'd8.jpg'));
});
app.get('/ui/d9.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'd9.jpg'));
});
app.get('/ui/d10.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'd10.jpg'));
});
app.get('/ui/d11.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'd11.jpg'));
});
app.get('/ui/d12.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'd12.jpg'));
});
app.get('/ui/d13.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'd13.jpg'));
});
app.get('/ui/d14.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'd14.jpg'));
});
app.get('/ui/d15.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'd15.jpg'));
});
app.get('/ui/d16.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'd16.jpg'));
});
app.get('/ui/d17.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'd17.jpg'));
});
app.get('/ui/d18.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'd18.jpg'));
});
app.get('/ui/d19.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'd19.jpg'));
});
app.get('/ui/dz.mp3', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'dz.mp3'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
