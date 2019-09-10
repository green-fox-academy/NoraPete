const express = require('express');
const path = require('path');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password.',
  database: 'foxplayer'
})

app.use(express.static('static'));
app.use(express.json());

connection.connect(function (dbConnectionError) {
  if (dbConnectionError) {
    console.log(dbConnectionError);
    return;
  }
  console.log('Connected to the database');
})

app.get('/', function (req, res) {
  res.sendFile(path.resolve('static/experiment/experiment.html'));
});

app.get('/playlists', function (req, res) {
  connection.query('SELECT * FROM playlists', function (err, rows) {
    if (err) {
      console.log('Could not get data from database');
      return;
    }
    res.send(rows);
  });
});

app.post('/playlists', function (req, res) {
  connection.query('INSERT INTO playlists SET ?', req.body, function (err, rows) {
    if (err) {
      console.log('Could not insert playlist into database', err);
      return;
    }
    res.send('ok');
  });
});

app.delete('/playlists/:id', function (req, res) {
  connection.query('SELECT sys FROM playlists WHERE id = ?', req.params.id, function (err, rows) {
    if (err) {
      console.log('Could not find the requested playlist');
      return;
    }
    if (rows[0].sys === 0) {
      connection.query('DELETE FROM playlists WHERE id = ?', req.params.id, function (delErr, rows) {
        if (delErr) {
          console.log('Could not delete playlist from database');
          return;
        }
        res.send('ok');
      });
    } else {
      res.send('You cannot delete this playlist');
    }
  });
});

module.exports = app;