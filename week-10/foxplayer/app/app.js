const express = require('express');
const path = require('path');
const mysql = require('mysql');

const getData = require('./metadata');
const askDatabase = require('./mysqlQueryHandler');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password.',
  database: 'foxplayer'
})

app.use(express.static('static'));
app.use(express.json());

// connection.connect(function (dbConnectionError) {
//   if (dbConnectionError) {
//     console.log(dbConnectionError);
//     return;
//   }
//   console.log('Connected to the database');
// })

app.get('/', function (req, res) {
  res.sendFile(path.resolve('static/experiment/experiment.html'));
});

app.get('/playlists', function (req, res) {
  askDatabase('SELECT * FROM playlists;')
    .then(result => res.send(result))
    .catch(err => {
      console.log('Could not get data from database', err);
      response = { error: 'Could not find playlists in the database.' };
      res.status(400);
    });
});

app.post('/playlists', function (req, res) {
  if (req.body.playlist) {
    askDatabase('INSERT INTO playlists (playlist) VALUES (?);', [req.body.playlist])
      .then(() => res.send({ message: 'Playlist created' }))
      .catch(err => {
        console.log('Could not insert playlist into database', err);
        response = { error: 'Could not create this playlist' };
        res.status(400);
      });
  } else {
    res.status(400);
    res.send({ error: 'Please provide a playlist name' });
  }
});

// TODO: delete from tracks where playlist_id = id

app.delete('/playlists/:id', function (req, res) {
  askDatabase('SELECT sys FROM playlists WHERE id = ?', [req.params.id])
    .then(result => {
      if (result.length === 0) {
        res.status(400);
        res.send({ error: 'Could not find the requested playlist' });
      } else if (result[0].sys === 0) {
        Promise.all([
          askDatabase('DELETE FROM playlists WHERE id = ?', [req.params.id]),
          askDatabase('DELETE FROM tracks WHERE playlist_id = ?', [req.params.id])
        ])
          .then(() => res.send({ message: 'Playlist is deleted' }))
          .catch(() => {
            res.status(400);
            res.send({ error: 'Could not delete playlist from database' });
          })
      } else {
        res.status(400);
        res.send({ error: 'You cannot delete this playlist' });
      }
    })
    .catch(() => {
      res.status(400);
      res.send({ error: 'Could not find the requested playlist' });
    });
});

app.get('/playlist-tracks', function (req, res) {
  getData(0)
    .then(data => res.send(data))
    .catch((err) => {
      console.log(err);
      res.status(400);
      res.send({ error: 'Could not get tracks from the databse' });
    });
});

app.get('/playlist-tracks/:playlist_id', function (req, res) {
  getData(req.params.playlist_id)
    .then(data => res.send(data))
    .catch((err) => {
      console.log(err);
      res.status(400);
      res.send({ error: 'Could not get tracks from the databse' });
    });
});

// TODO: check if playlist exists before adding track to it

app.post('/playlist-tracks/:playlist_id/:track_id', function (req, res) {
  askDatabase('SELECT id FROM playlists WHERE id = ?', [req.params.playlist_id])
    .then(result => {
      if (result.length === 0) {
        res.status(400);
        res.send({ error: 'The playlist does not exist' });
      } else {
        askDatabase('SELECT id, path FROM tracks WHERE id = ?', [req.params.track_id])
          .then(result => {
            askDatabase(
              'INSERT INTO tracks (id, path, playlist_id) VALUES (?, ?, ?);',
              [result[0].id, result[0].path, req.params.playlist_id]
            )
              .then(() => res.send({ message: 'Track is added to the playlist' }))
              .catch(() => {
                res.status(400);
                res.send({ error: 'Could not add to playlist' });
              });
          })
          .catch(() => {
            res.status(400);
            res.send({ error: 'Could not find the requested track' });
          });
      }
    })
    .catch(() => {
      res.status(400);
      res.send({ error: 'Could not find the requested playlist' });
    });
});

app.delete('/playlist-tracks/:playlist_id/:track_id', function (req, res) {
  askDatabase(
    'SELECT id FROM tracks WHERE id = ? AND playlist_id = ?',
    [req.params.track_id, req.params.playlist_id]
  ).then(result => {
    if(result.length === 0) {
      res.status(400);
      res.send({ error: 'Could not find the requested track and/or the playlist' });
    } else {
      askDatabase(
        'DELETE FROM tracks WHERE id = ? AND playlist_id = ?;',
        [req.params.track_id, req.params.playlist_id]
      )
        .then(() => res.send({ message: 'Track is deleted from playlist' }))
        .catch(() => {
          res.status(400);
          res.send({ error: 'Could not delete track from playlist' });
        });
    }
  })
  .catch(() => {
    res.status(400);
    res.send({ error: 'Could not delete the track' });
  })
  
});

module.exports = app;
