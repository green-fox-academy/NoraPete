'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.

function drawsDiagonal (x, y) {
    if (x == 0 && y == 0) {
        ctx.beginPath();
        ctx.strokeStyle = 'green';
        ctx.moveTo(x, y);
        ctx.lineTo(600, 400);
        ctx.stroke();
    } else if (x == 600 && y == 400) {
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.moveTo(x, y);
        ctx.lineTo(0, 0);
        ctx.stroke();
    } else {
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.moveTo(600, 0);
        ctx.lineTo(0, 400);
        ctx.stroke();
    }
}

drawsDiagonal(0, 400);
