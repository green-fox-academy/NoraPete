'use strict';

let ord=Math.random()*10000000000000000;
let body = document.querySelector('body');

body.style.backgroundImage = `url(https://loremflickr.com/g/1280/800/hungary/?ord=${ord}?)`;

setInterval(function () {
  location.reload(true);
  console.log(body);
}, 5000);
