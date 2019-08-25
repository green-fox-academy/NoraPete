'use strict';

const imageInspector = document.querySelector('.img-inspector');

let size = 100;
let positionX = 0;
let positionY = 0;

function zoom(direction) {
  imageInspector.style.backgroundSize = `${size += direction}%`;
}

function move(horizontal, vertical) {
  imageInspector.style.backgroundPosition = `${positionX += horizontal}px ${positionY += vertical}px`;
}

document.querySelector('nav').addEventListener('click', function (e) {
  let direction = e.target.dataset.direction;
  switch(direction) {
    case 'up':
      move(0, -10);
      break;
    case 'down':
      move(0, 10);
      break; 
    case 'right':
      move(10, 0);
      break;
    case 'left':
      move(-10, 0);
      break;
    case 'in':
      zoom(20);
      break;
    case 'out':
      zoom(-20);
      break;
  }
});