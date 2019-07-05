'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

export = {};

let step: number = 16;
let diff: number = canvas.width / (step * 2);

ctx.beginPath();
ctx.strokeStyle = 'limegreen';
for (let i: number = 0; i < step * 2; i++) {
    ctx.moveTo(0 + i * diff, canvas.height / 2);
    if (i <= step) {
        ctx.lineTo(canvas.width / 2, canvas.height / 2 - (i + 1) * diff);
        ctx.stroke();
    } else {
        ctx.lineTo(canvas.width / 2, (i - step) * diff);
        ctx.stroke();
    }
}

for (let i: number = 0; i < step * 2; i++) {
    ctx.moveTo(0 + i * diff, canvas.height / 2);
    if (i <= step) {
        ctx.lineTo(canvas.width / 2, canvas.height / 2 + (i + 1) * diff);
        ctx.stroke();
    } else {
        ctx.lineTo(canvas.width / 2, canvas.height - (i - step) * diff);
        ctx.stroke();
    }
}
