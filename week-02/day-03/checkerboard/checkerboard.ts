'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.
export = {};

let sqrSize: number = 5;

function fillsSquare(x: number, y: number, size: number) {
    ctx.fillRect(x, y, size, size);
}

function strokesSquare(x: number, y: number, size: number) {
    ctx.strokeRect(x, y, size, size);
}

for (let i: number = 0; i < canvas.height / sqrSize; i++) {
    let yCoo: number = i * sqrSize;
    if (i % 2 == 0) {
        for (let j: number = 0; j < canvas.width / sqrSize; j++) {
            let xCoo: number = j * sqrSize;
            if (j % 2 == 0) {
                fillsSquare(xCoo, yCoo, sqrSize);
            } else {
                strokesSquare(xCoo, yCoo, sqrSize);
            }
        }
    } else {
        for (let k: number = 0; k < canvas.width / sqrSize; k++) {
            let xCoo: number = k * sqrSize;
            if (k % 2 == 0) {
                strokesSquare(xCoo, yCoo, sqrSize);
            } else {
                fillsSquare(xCoo, yCoo, sqrSize);
            }
        }
    }
}
