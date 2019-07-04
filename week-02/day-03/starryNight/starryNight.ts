'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)
export = {};

function generatesRandomNumberWithMax(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
}
let maxNumOfStars: number = 300;
let numOfStars: number = generatesRandomNumberWithMax(maxNumOfStars);

ctx.fillRect(0, 0, canvas.width, canvas.height);

for (let i: number = 0; i < numOfStars; i++) {
    ctx.fillStyle = `rgb(${0 + i * 255 / numOfStars}, ${0 + i * 255 / numOfStars}, ${0 + i * 255 / numOfStars})`;
    ctx.fillRect(generatesRandomNumberWithMax(canvas.width), generatesRandomNumberWithMax(canvas.height), 5, 5);
}
