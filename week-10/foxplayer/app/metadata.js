const fs = require('fs');
const mm = require('musicmetadata');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password.',
  database: 'foxplayer'
});

function getTracks(playlist) {
  return new Promise((resolve, reject) => {
    if(playlist === 0) {
      connection.query('SELECT * FROM tracks WHERE ISNULL(playlist_id);', function (err, rows) {
        if (err) reject(err);
        resolve(rows);
      });
    } else {
      connection.query('SELECT * FROM tracks WHERE playlist_id = ?', playlist, function (err, rows) {
        if (err) reject(err);
        resolve(rows);
      });
    }
  })
    .then((rows) => {
      return rows.map(function(row) {
        return { id: row.id, path: row.path };
      });
    })
    .catch(console.log);
}

function getMetadata(path) {
  return new Promise((resolve, reject) => {
    let stream = fs.createReadStream(path);
    mm(stream, { duration: true }, function (err, metadata) {
      if (err) reject(err);
      resolve(metadata);
    });
  })
    .then((metadata) => {
      return { title: metadata.title, artist: metadata.artist[0], duration: metadata.duration };
    })
    .catch(console.log);
}

async function editData(track) {
  let idAndPath = track;
  let meta = await getMetadata(idAndPath.path);
  let response = {
    id: idAndPath.id,
    title: meta.title,
    artist: meta.artist,
    duration: meta.duration,
    path: idAndPath.path
  };
  return response;
}

async function assembler(playlist) {
  let tracks = await getTracks(playlist);
  let response = await Promise.all(tracks.map(editData));
  connection.end();
  return response;
}

module.exports = assembler;
