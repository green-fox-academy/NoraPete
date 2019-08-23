'use strict';

let form = document.querySelector('form');
let username = document.querySelector('#username');

form.addEventListener('submit', e => {
  alert(`${username.value} is loged in`);
});
