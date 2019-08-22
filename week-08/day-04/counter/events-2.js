'use strict';

const button = document.querySelector('button');
const result = document.querySelector('.result');
const liTags = document.querySelectorAll('li');

function countElements(list) {
  return list.length;
}

button.addEventListener('click', function () {
  result.innerHTML = countElements(liTags);
})