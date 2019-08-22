'use strict';

const button = document.querySelector('button');
const message = document.querySelector('div');

function writeMessage() {
  message.innerHTML = '2 seconds elapsed';
}

button.addEventListener('click', function () {
  setTimeout(writeMessage, 2000);
});