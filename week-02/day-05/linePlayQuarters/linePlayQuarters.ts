'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

export = {};

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
