'use strict';

const button = document.querySelector('button');
let counter = 0;

function logTimestamp() {
  console.log(Date.now());
}

//Solution one
/*
button.addEventListener('click', logTimestamp);

button.addEventListener('click', function () {
  counter ++;
});

button.addEventListener('click', function () {
  if (counter > 0) {
    button.removeEventListener('click', logTimestamp);
  }
});
*/
//Solution two

button.addEventListener('click', function (e) {
  logTimestamp();
  e.target.disabled = true;
})