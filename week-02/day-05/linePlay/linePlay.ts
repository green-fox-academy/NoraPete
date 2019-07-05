'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

export = {};

let step: number = 16;
ctx.beginPath();
ctx.strokeStyle = 'limegreen';
for (let i: number = 0; i < step; i ++) {
    ctx.moveTo(1, 1 + i * canvas.height / step);
    ctx.lineTo(1 + (i + 1) * canvas.height / step, canvas.height -1);
    ctx.stroke();
}

ctx.beginPath();
ctx.strokeStyle = 'purple';
for (let i: number = 0; i < 16; i ++) {
    ctx.moveTo(1 + i * canvas.width / step, 1);
    ctx.lineTo(canvas.width -1, 1 + (i + 1) * canvas.height / step);
    ctx.stroke();
}
