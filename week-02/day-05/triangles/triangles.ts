'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

export = {};

let numOfTrianglesInTheBase: number = 20;
let heightCoeff: number = Math.sqrt(3) / 2;
let side: number = canvas.width / numOfTrianglesInTheBase;

function drawsTriangle(xCoo: number, yCoo: number): void {
    ctx.beginPath();
    ctx.moveTo(xCoo, yCoo);
    ctx.lineTo(xCoo + side, yCoo);
    ctx.lineTo(xCoo + side / 2, yCoo - side * heightCoeff);
    ctx.lineTo(xCoo, yCoo);
    ctx.stroke();
}

for (let i: number = 0; i < numOfTrianglesInTheBase; i++) {
    for (let j: number = 0; j < numOfTrianglesInTheBase - i; j++) {
        let startX: number = 0 + (i / 2 + j) * side;
        let startY: number = canvas.height - i * side * heightCoeff;
        drawsTriangle(startX, startY);
    }
}
