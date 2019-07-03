'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]
export = {}

let sqrSize: number = 10;
let fillColor: string = 'purple';
let strokeColor: string = 'black';

function fillsSquares (x: number, y: number, size: number, col: string) {
    ctx.fillStyle = col;
    ctx.fillRect(x, y, size, size);
}

function strokesSquares (x: number, y: number, size: number, col: string) {
    ctx.strokeStyle = col;
    ctx.strokeRect(x, y, size, size);
}

for (let i: number = 0; i < 20; i ++) {
    let xCoo: number = i * sqrSize + 10;
    let yCoo: number = i * sqrSize +10;
    fillsSquares(xCoo, yCoo, sqrSize, fillColor)
    strokesSquares(xCoo, yCoo, sqrSize, strokeColor)
}
