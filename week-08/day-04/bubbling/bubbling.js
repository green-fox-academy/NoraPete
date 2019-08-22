'use strict';

const imageInspector = document.querySelector('.img-inspector');

let size = 100;
let positionX = 0;
let positionY = 0;

function zoomIn() {
  imageInspector.style.backgroundSize = `${size += 20}%`;
}

function zoomOut() {
  imageInspector.style.backgroundSize = `${size -= 20}%`;
}

function moveRight() {
  imageInspector.style.backgroundPosition = `${positionX += 10}px ${positionY}px`;
}

function moveLeft() {
  imageInspector.style.backgroundPosition = `${positionX -= 10}px ${positionY}px`;
}

function moveUp() {
  imageInspector.style.backgroundPosition = `${positionX}px ${positionY -= 10}px`;
}

function moveDown() {
  imageInspector.style.backgroundPosition = `${positionX}px ${positionY += 10}px`;
}

document.querySelector('nav').addEventListener('click', function (e) {
  let direction = e.target.dataset.direction;
    if (direction === 'up') {
      moveUp();
    } else if (direction === 'down') {
      moveDown();
    } else if (direction === 'right') {
      moveRight();
    } else if (direction === 'left') {
      moveLeft();
    } else if (direction === 'in') {
      zoomIn();
    } else if (direction === 'out') {
      zoomOut();
    }
});