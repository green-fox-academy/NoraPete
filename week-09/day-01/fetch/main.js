'use strict';

let container = document.querySelector('div');
let button = document.querySelector('button');

function addJoke(response) {
  let joke = document.createElement('p');
  joke.innerText = response.value.joke;
  container.appendChild(joke);
}

function printErrorMsg(error) {
  console.log(error.message);
}

button.addEventListener('click', function () {
  fetch('http://api.icndb.com/jokes/random')
    .catch(printErrorMsg)
    .then(response => response.json())
    .then(addJoke);
});
