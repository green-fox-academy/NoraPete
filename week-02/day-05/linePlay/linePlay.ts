'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

export = {};

let diff: number = canvas.height / 16;
ctx.beginPath();
ctx.strokeStyle = 'limegreen';
for (let i: number = 0; i < 16; i ++) {
    ctx.moveTo(1, 1 + i * diff);
    ctx.lineTo(1 + (i + 1) * diff, canvas.height -1);
    ctx.stroke();
}

ctx.beginPath();
ctx.strokeStyle = 'purple';
for (let i: number = 0; i < 16; i ++) {
    ctx.moveTo(1 + i * diff, 1);
    ctx.lineTo(canvas.width -1, 1 + (i + 1) * diff);
    ctx.stroke();
}
