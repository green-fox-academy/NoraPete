const fs = require('fs');
const mm = require('musicmetadata');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password.',
  database: 'foxplayer'
});

function getTrack(id) {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM tracks WHERE id = ?', id, function (err, row) {
      if (err) reject(err);
      resolve(row);
    });
  })
    .then((row) => {
      return { id: row[0].id, path: row[0].path };
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

async function assambleData(id) {
  let idAndPath = await getTrack(id);
  let meta = await getTrack(id).then((data) => {
    return getMetadata(data.path)
  });
  let response = {
    id: idAndPath.id,
    title: meta.title,
    artist: meta.artist,
    duration: meta.duration,
    path: idAndPath.path
  };
  //console.log(response);
  return response;
}


module.exports = assambleData;
