'use strict';

let player = document.querySelector('audio');

function logMessage(eventName) {
  console.log(`${eventName} happend`);
}

player.onloadstart = (e) => logMessage('loadstart');
player.onplay = (e) => logMessage('play');
player.onended = (e) => logMessage('ended');
player.onprogress = (e) => logMessage('progress');
