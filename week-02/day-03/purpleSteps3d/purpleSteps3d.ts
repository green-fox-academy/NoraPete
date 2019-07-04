'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]
export = {};

let xCoo: number = 0;
let yCoo: number = 0;

function drawsPurpleBoxesWithBlackBorder(x: number, y: number, size: number) {
    ctx.fillStyle = 'purple';
    ctx.fillRect(x, y, size, size);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(x, y, size, size);
}

for (let i: number = 0; i < 6; i++) {
    let sqrSize: number = 10 + i * 10
    drawsPurpleBoxesWithBlackBorder(xCoo, yCoo, sqrSize);
    xCoo += sqrSize;
    yCoo += sqrSize;
}
