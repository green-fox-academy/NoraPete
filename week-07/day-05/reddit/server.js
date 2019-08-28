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

app.use(express.json());

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

app.get('/posts', function(req, res) {
  connection.query('SELECT * FROM posts;', (error, result) => {
    if(error)  {
      console.log('Couldnt get data from the database', error);
      return;
    }
    res.status(200);
    res.setHeader('Content-Type', 'application/json');
    res.send({ posts: result });
  });
});

app.listen(PORT, function() {
  console.log(`Server is up and running on port ${PORT}`);
});