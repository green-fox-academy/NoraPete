'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.
export = {};

function drawsDiagonal(x, y) {
    if (x == 0 && y == 0) {
        ctx.beginPath();
        ctx.strokeStyle = 'green';
        ctx.moveTo(x, y);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.stroke();
    } else if (x == canvas.width && y == canvas.width) {
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.moveTo(x, y);
        ctx.lineTo(0, 0);
        ctx.stroke();
    } else {
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.moveTo(canvas.width, 0);
        ctx.lineTo(0, canvas.height);
        ctx.stroke();
    }
}

drawsDiagonal(0, 0);
