'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.
export = {};

let colorSheet = {
    0: 'red',
    1: 'green',
    2: 'blue',
    3: 'purple',
};

for (let i: number = 0; i < 4; i++) {
    ctx.fillStyle = colorSheet[i % 4];
    ctx.fillRect(20 + i * 5, 20 + i * 9, i * 20 + 10, i * 30 + 20)
}
