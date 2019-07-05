'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

export = {};

let div: number = 2;
let edgeX: number = 0 + canvas.width / div;
let edgeY: number = 0 + canvas.height / div;

let diff: number = edgeY / 16;
ctx.beginPath();
ctx.strokeStyle = 'limegreen';
for (let i: number = 0; i < 16; i ++) {
    ctx.moveTo(edgeX, 0 + i * diff);
    ctx.lineTo(edgeX + (i + 1) * diff, edgeY);
    ctx.stroke();
}

for (let i: number = 0; i < 16; i ++) {
    ctx.moveTo(0 + i * diff, edgeY);
    ctx.lineTo(edgeX, edgeY + (i + 1) * diff);
    ctx.stroke();
}

for (let i: number = 0; i < 16; i ++) {
    ctx.moveTo(edgeX, 0 + i * diff);
    ctx.lineTo(edgeX - (i + 1) * diff, edgeY);
    ctx.stroke();
}

for (let i: number = 0; i < 15; i ++) {
    ctx.moveTo(edgeX, canvas.height - (i + 1) * diff);
    ctx.lineTo(edgeX + (i + 1) * diff, edgeY);
    ctx.stroke();
}