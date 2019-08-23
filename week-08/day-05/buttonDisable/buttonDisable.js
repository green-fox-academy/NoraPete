'use strict';

let catBtn = document.querySelector('.love-cat');
let signBtn = document.querySelector('.sign-up');
let favPet = document.querySelector('.pet');
let catFacts = document.querySelector('.fact');

let pet;
let fact;

favPet.addEventListener('change', function (e) {
  pet = e.target.value;
  signBtn.disabled = false;
});

catFacts.addEventListener('change', function (e) {
  fact = e.target.value;
  if (fact === 'yes') {
    catBtn.disabled = false;
  } else {
    catBtn.disabled = true;
  }
});

catBtn.addEventListener('click', function () {
  alert('Thank you, you\'ve successfully signed up for cat facts');
});

signBtn.addEventListener('click', function () {
  if(pet === 'fish' && fact === 'no') {
    alert('Sigh, we still added you to the cat facts list');
  } else {
    alert('Thank you, you\'ve successfully signed up for cat facts');
  }
});
