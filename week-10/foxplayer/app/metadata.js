const fs = require('fs');
const mm = require('musicmetadata');

const path = '../static/music/Metallica - 1991 - The Black Album/01 - Enter Sandman.mp3';

const readableStream = fs.createReadStream(path);

const parser = mm(readableStream, { duration: true }, function(err, metadata) {
    if (err) throw err;
     console.log(metadata);
  });

module.exports = parser;