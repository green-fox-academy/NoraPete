'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.
export = {};

let colorSheet: string[] = ['darkred', 'orangered', 'orange', 'yellow', 'lawngreen', 'forestgreen', 'teal', 'midnightblue', 'indigo']

function drawsSquareOfGivenSizeAndColor(size: number, colour: string) {
    ctx.fillStyle = colour;
    ctx.fillRect(canvas.width / 2 - size / 2, canvas.height / 2 - size / 2, size, size);
}

for (let i: number = 0; i < canvas.width / 20; i ++ ) {
    let squareSize: number = canvas.width;
    squareSize = squareSize - i * 20;
    drawsSquareOfGivenSizeAndColor(squareSize, colorSheet[i % colorSheet.length]);
}
