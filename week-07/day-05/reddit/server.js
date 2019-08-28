'use strict';

const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password.',
  database: 'reddit'
});

connection.connect(function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Connection with database is established');
});

app.get('/hello', function(req, res) {
  res.send('Hello World!');
});

app.listen(PORT, function() {
  console.log(`Server is up and running on port ${PORT}`);
});