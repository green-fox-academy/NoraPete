const express = require('express');
const path = require('path'); 

// path returns a path as a string, 
// path.resolve('relativePath') returns the given path as absolute path 
// using the current directory, from which it is invoked as root (server.js in this case!!!!)

const app = express();

app.use(express.static('static'));

// express.static('staticFolder') express will look for files here automatically, use '(staticFolder/)folder/file.ext'

app.get('/', function(req, res) {
  res.sendFile(path.resolve('views/index.html'));
});

module.exports = app;