'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

export = {};

let heightCoefficient: number = Math.sqrt(3) / 2;

function drawsOneHexagonAtSpecifiedPlace(x: number, y: number, side: number): void {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + side / 2, y + heightCoefficient * side);
    ctx.lineTo(x + side * 1.5, y + heightCoefficient * side);
    ctx.lineTo(x + side * 2, y);
    ctx.lineTo(x + side * 1.5, y - heightCoefficient * side);
    ctx.lineTo(x + side / 2, y - heightCoefficient * side);
    ctx.lineTo(x, y);
    ctx.stroke();
}

function drawsGivenNumOfHexagons(num: number, x: number, y: number, side: number): void {
    for (let line: number = 0; line < num; line++) {
        drawsOneHexagonAtSpecifiedPlace(x, y + 2 * line * side * heightCoefficient, side);
    }
}

function drawsHexagonOfHexagons(numOfHexagonsInOneSide: number): void {
    let maxNumOfHexagons: number = numOfHexagonsInOneSide * 2 - 1;
    let numOfHexagonsToDraw: number = numOfHexagonsInOneSide;
    let smallHexagonsSide: number = canvas.height / (maxNumOfHexagons * heightCoefficient * 2);
    let startX: number = canvas.width / 2 - (numOfHexagonsInOneSide * 3 - 1) * smallHexagonsSide / 2;
    let startY: number = numOfHexagonsInOneSide * heightCoefficient * smallHexagonsSide;
    for (let column: number = 0; column < maxNumOfHexagons; column++) {
        drawsGivenNumOfHexagons(numOfHexagonsToDraw, startX, startY, smallHexagonsSide);
        if (numOfHexagonsInOneSide + column < maxNumOfHexagons) {
            numOfHexagonsToDraw++;
            startY -= heightCoefficient * smallHexagonsSide;
        } else {
            numOfHexagonsToDraw--;
            startY += heightCoefficient * smallHexagonsSide;
        }
        startX += 1.5 * smallHexagonsSide;
    }
}

drawsHexagonOfHexagons(100);
