'use strict';

const button = document.querySelector('button');
const message = document.querySelector('div');

let counter = 0;

function writeMessage() {
  message.innerHTML = '5 seconds elapsed and clicked 3 times';
}

function triggerButton() {
  button.addEventListener('click', function () {
    counter++;
    if (counter === 3) {
      writeMessage();
    }
  });
}

window.addEventListener('load', function () {
  setTimeout(triggerButton, 5000);
});
