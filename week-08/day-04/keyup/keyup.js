'use strict';

const headerTag = document.querySelector('h1');

function logEvent(event) {
  console.log(event);
}

function displayKeyCode(event) {
  headerTag.innerText = `Last pressed key code is: ${event.keyCode}`
}

window.addEventListener('keyup', function (e) {
  logEvent(e);
  displayKeyCode(e);
});