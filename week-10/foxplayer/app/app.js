const express = require('express');
const path = require('path');
const mysql = require('mysql');

const getData = require('./metadata');

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

app.get('/playlist-tracks', function(req, res) {
  getData(0).then(data => res.send(data));
});

app.get('/playlist-tracks/:playlist_id', function(req, res) {
  getData(req.params.playlist_id).then(data => res.send(data));
});

app.post('/playlist-tracks/:playlist_id/:track_id', function(req, res) {
  connection.query('SELECT id, path FROM tracks WHERE id = ?', req.params.track_id, function(err, row) {
    if (err) {
      console.log('Could not find the track in the database');
      return;
    }
    connection.query('INSERT INTO tracks (id, path, playlist_id) VALUES (?, ?, ?)', [row[0].id, row[0].path, req.params.playlist_id], function(insErr, rows) {
      if (insErr) {
        console.log('Could not add the track to playlist');
        return;
      }
      res.send('ok');
    });
  });
});

app.delete('/playlist-tracks/:playlist_id/:track_id', function(req, res) {
  connection.query('DELETE FROM tracks WHERE id = ? AND playlist_id = ?;', [req.params.track_id, req.params.playlist_id], function(delErr, rows) {
    if (delErr) {
      console.log('Could not delete the track from playlist');
      return;
    }
    res.send('ok');
  });
});


module.exports = app;
