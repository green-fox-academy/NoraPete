'use strict';

let btn = document.querySelector('button');
let display = document.querySelector('.display');

let counter = 0;

let detonator = function () {
  display.innerHTML = 'Bomb exploded';
}

let defuser = function () {
  if (counter < 10) {
    display.innerHTML = 'Bomb defused';
  }
}

let displayRemainingSeconds = function () {
  display.innerHTML = 10 - counter;
}

let intervalID = setInterval(function () {
  counter++;
  if (counter === 10) {
    clearInterval(intervalID);
  }
  if (counter < 10) {
    displayRemainingSeconds();
  } else {
    detonator();
  }
  console.log(counter);
}, 1000);

btn.addEventListener('click', function () {
  defuser();
  clearInterval(intervalID);
});
