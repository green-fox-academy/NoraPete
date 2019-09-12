'use strict';

const playlistBox = document.querySelector('.playlists');
const trackBox = document.querySelector('.tracks');
const errorBox = document.querySelector('.logo p');
const currentTitle = document.querySelector('.current-track h2');
const currentArtist = document.querySelector('.current-track h3');
const player = document.querySelector('audio');
const createPlaylist = document.querySelector('.playlist-header img')

let playlists;
let tracks;
let currentlyPlaying = 0;

function addDeleteSign(playlist, parent) {
  if(playlist.sys === 0) {
    let deleteSign = document.createElement('img');
    deleteSign.setAttribute('src', 'images/plus.svg');
    deleteSign.setAttribute('alt', 'delete');
    parent.appendChild(deleteSign);
  }
}

function renderPlaylist(playlist) {
  let row = document.createElement('div');
  let title = document.createElement('p');
  title.innerText = playlist.playlist;
  row.appendChild(title);
  addDeleteSign(playlist, row);
  return row;
}

function renderTrack(track) {
  let row = document.createElement('div');
  let titleAndArtist = document.createElement('p');
  let duration = document.createElement('p');
  titleAndArtist.innerText = `${track.title}(${track.artist})`;
  duration.innerText = `${Math.floor(track.duration / 60)}:${track.duration % 60}`;
  row.appendChild(titleAndArtist);
  row.appendChild(duration);
  return row;
}

function displayList(list, callback, parent) {
  list.forEach(function(item) {
    parent.appendChild(callback(item));
  });
}

function displayError(error) {
  errorBox.innerText = error.message;
}

function displayCurrentTrack(index) {
  currentTitle.innerText = tracks[index].title;
  currentArtist.innerText = tracks[index].artist;
}

function displayPlaylists() {
  displayList(playlists, renderPlaylist, playlistBox);
}

function displayTracks() {
  displayList(tracks, renderTrack, trackBox);
}

window.addEventListener('load', function(e) {
  fetch('/playlists', {
    method: 'GET', 
    headers: { 'Accept': 'application/json' }
  })
  .then(res => {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Could not get playlists from database');
    }
    return res;
  })
  .then(res => res.json())
  .then(json => {
    playlists = json;
    displayPlaylists();
  })
  .catch(displayError);
  fetch('/playlist-tracks', {
    method: 'GET', 
    headers: { 'Accept': 'application/json' }
  })
  .then(res => {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Could not get playlists from database');
    }
    return res;
  })
  .then(res => res.json())
  .then(json => {
    tracks = json;
    displayTracks();
    displayCurrentTrack(currentlyPlaying);
    //player.setAttribute('src', tracks[currentlyPlaying].path);
  })
  .catch(displayError);
});

createPlaylist.addEventListener('click', function(e) {
  
})