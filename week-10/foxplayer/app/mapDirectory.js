const fs = require('fs');
const path = require('path');

function mapDirectory(directory) {
  let fileArray = [];
  let reFilename = /\.\w+$/;
  let folderContent = fs.readdirSync(directory);
  folderContent.forEach(function(location) {
    if(location.search(reFilename) > -1) {
      fileArray.push(`${directory}/${location}`);
    } else {
      mapDirectory(`${directory}/${location}`).forEach(function (file) {
        fileArray.push(file);
      });
    }
  });
  return fileArray;
}

function getMusicFilePaths(directory) {
  let tracks = mapDirectory(directory).filter(function(file) {
    return file.search('.mp3') > -1;
  });
  return tracks.map(function(track) {
    return path.resolve(track);
  });
}

// module.exports = getMusicFilePaths;
