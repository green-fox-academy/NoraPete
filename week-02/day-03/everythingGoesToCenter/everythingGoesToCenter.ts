'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function drawsLineToCenter(x: number, y: number) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.stroke();
}

for (let i: number = 0; i < canvas.height / 20 + 1; i++) {
    let yCoo: number = i * 20;
    if (yCoo == 0 || yCoo == canvas.height) {
        for (let j: number = 0; j < canvas.width / 20 + 1; j++) {
            let xCoo: number = j * 20;
            drawsLineToCenter(xCoo, yCoo);
        }

    } else {
        drawsLineToCenter(0, yCoo);
        drawsLineToCenter(canvas.width, yCoo);
    }
}
