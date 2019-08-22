'use strict';

const button = document.querySelector('button');
let counter = 0;

function logTimestamp() {
  console.log(Date.now());
}

button.addEventListener('click', logTimestamp);

button.addEventListener('click', function () {
  counter ++;
});

button.addEventListener('click', function () {
  if (counter > 0) {
    button.removeEventListener('click', logTimestamp);
  }
});