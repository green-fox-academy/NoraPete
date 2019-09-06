'use strict';

let mainContent = document.querySelector('main');

fetch('/reddit')
  .then(res => res.text())
  .then(content => mainContent.innerHTML = content)
  .catch(console.log);
  