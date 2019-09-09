const express = require('express');
const path = require('path'); 

const app = express();

app.use(express.static('static'));

app.get('/', function(req, res) {
  res.sendFile(path.resolve('static/experiment/experiment.html'));
});

module.exports = app;