'use strict';

let section = document.querySelector('section');

for (let i = 0; i < 100; i++) {
  let div = document.createElement('div');
  div.innerText = i + 1;
  section.appendChild(div);
}

let primeValidator = function (num) {
  if (num === 1) {
    return false;
  } else if (num > 2) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
  }
  return true;
};

let divs = document.querySelectorAll('div');
let counter = 0;


setInterval(function () {
  if (primeValidator(counter + 1)) {
    divs[counter].classList.add('prime');
  } else {
    divs[counter].classList.add('not-prime');
  }
  counter++;
}, 100);
