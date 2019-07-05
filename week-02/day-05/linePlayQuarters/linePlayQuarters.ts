'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

export = {};

/*
let div: number = 2;
let edgeX: number = 0 + canvas.width / div;
let edgeY: number = 0 + canvas.height / div;

let diff: number = edgeY / 16;
ctx.beginPath();
ctx.strokeStyle = 'limegreen';
for (let i: number = 0; i < 16; i ++) {
    ctx.moveTo(edgeX + 1, 1 + i * diff);
    ctx.lineTo(edgeX +1 + (i + 1) * diff, edgeY -1);
    ctx.stroke();
}

ctx.beginPath();
ctx.strokeStyle = 'purple';
for (let i: number = 0; i < 16; i ++) {
    ctx.moveTo(1 + i * diff, edgeY + 1);
    ctx.lineTo(edgeX -1, edgeY + 1 + (i + 1) * diff);
    ctx.stroke();
}
*/

let step: number = 16;
let divide: number = 4;
let diff: number = canvas.width / (step * divide);
let axisDiff: number = canvas.width / divide;

function drawsPatternInOneBlock (idOfPartsHor: number, idOfPartsVert: number): void {
    for (let i: number = 0; i < step; i ++) {
        ctx.beginPath();
        ctx.strokeStyle = 'limegreen';
        ctx.moveTo(idOfPartsHor * axisDiff, i * diff + (idOfPartsVert * axisDiff));
        ctx.lineTo((i + 1) * diff + (idOfPartsHor * axisDiff), (idOfPartsVert + 1) * axisDiff);
        ctx.stroke();
    
        ctx.beginPath();
        ctx.strokeStyle = 'purple';
        ctx.moveTo(i * diff + (idOfPartsHor * axisDiff), idOfPartsVert * axisDiff);
        ctx.lineTo((idOfPartsHor + 1) * axisDiff, (i + 1) * diff + (idOfPartsVert * axisDiff));
        ctx.stroke();
    }
}

for (let i: number = 0; i < divide; i ++) {
    let horPos: number = i;
    for (let j: number = 0; j < divide; j ++) {
        let vertPos: number = j;
        drawsPatternInOneBlock(horPos, vertPos);
    }
}
