'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.
export = {};

function drawsSquareOfCertainSize (x: number) {
    ctx.strokeRect(canvas.width /2 - x / 2, canvas.height / 2 - x / 2, x, x);
}

for (let i: number = 0; i < 3; i ++) {
    drawsSquareOfCertainSize(300 - i * 40);
}
