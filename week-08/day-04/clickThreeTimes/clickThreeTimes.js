'use strict';

const button = document.querySelector('button');
const message = document.querySelector('div');

let counter = 0;

function countClicks() {
    counter ++;
}

function writeMessageAfterThreeClicks() {
  if(counter === 3) {
    message.innerHTML = '5 seconds elapsed and clicked 3 times';
  }
}

window.addEventListener('load', function () {
  button.addEventListener('click', countClicks);
  setTimeout(function () {
    if(counter === 0) {
      button.addEventListener('click', writeMessageAfterThreeClicks);
    }
  }, 5000);
});
