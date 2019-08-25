'use strict';

let catBtn = document.querySelector('.love-cat');
let signBtn = document.querySelector('.sign-up');
let favPet = document.querySelector('.pet');
let catFacts = document.querySelector('.fact');

let pet;
let fact;

function checkIfFishAndNoSelected() {
  return pet === 'fish' && fact === 'no';
}

favPet.addEventListener('change', function (e) {
  pet = e.target.value;
  signBtn.disabled = false;
});

catFacts.addEventListener('change', function (e) {
  fact = e.target.value;
  catBtn.disabled = fact !== 'yes';
});

catBtn.addEventListener('click', function () {
  alert('Thank you, you\'ve successfully signed up for cat facts');
});

signBtn.addEventListener('click', function () {
  let message = checkIfFishAndNoSelected()
    ? 'Sigh, we still added you to the cat facts list'
    : 'Thank you, you\'ve successfully signed up for cat facts';
  alert(message);
});
