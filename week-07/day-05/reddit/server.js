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

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});

app.get('/posts', function (req, res) {
  connection.query('SELECT * FROM posts;', (error, result) => {
    if (error) {
      console.log('Couldnt get data from the database', error);
      return;
    }
    res.status(200);
    res.setHeader('Content-Type', 'application/json');
    res.send({ posts: result });
  });
});

app.post('/posts', function (req, res) {
  connection.query('INSERT INTO posts SET ?', req.body, (insError, insResult) => {
    if (insError) {
      console.log('Couldn\'t insert data into database', insError);
      return;
    }
    connection.query('SELECT * FROM posts WHERE id = ?', insResult.insertId, (readError, readResult) => {
      if (readError) {
        console.log('Couldn\'t get inserted row from database', readError);
        return;
      }
      res.status(200);
      res.setHeader('Contet-Type', 'application/json');
      res.send(readResult[0]);
    });
  });
});

app.put('/posts/:id/upvote', function(req, res) {
  connection.query('UPDATE posts SET score = score + 1 WHERE id = ?', req.params.id, (error, result) => {
    if(error) {
      console.log('Couldn\'t update database', error);
      return;
    }
  });
  connection.query('SELECT * FROM posts WHERE id = ?', req.params.id, (error, result) => {
    if(error) {
      console.log('Couldn\'t get updated row from database', error);
      return;
    }
    res.status(200);
    res.setHeader('Contet-Type', 'application/json');
    res.send(result[0]);
  });
});

app.put('/posts/:id/downvote', function(req, res) {
  connection.query('UPDATE posts SET score = score - 1 WHERE id = ?', req.params.id, (error, result) => {
    if(error) {
      console.log('Couldn\'t update database', error);
      return;
    }
  });
  connection.query('SELECT * FROM posts WHERE id = ?', req.params.id, (error, result) => {
    if(error) {
      console.log('Couldn\'t get updated row from database', error);
      return;
    }
    res.status(200);
    res.setHeader('Contet-Type', 'application/json');
    res.send(result[0]);
  });
});

app.listen(PORT, function () {
  console.log(`Server is up and running on port ${PORT}`);
});