'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]
export = {};

let dotsOfBox: number[][] = [[10, 10], [290, 10], [290, 290], [10, 290]];
let dotList: number[][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]]

function connectsCoordinates(coordinateList: number[][]) {
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    coordinateList.forEach(function (coordinates) {
        if (coordinateList.indexOf(coordinates) == 0) {
            ctx.moveTo(coordinates[0], coordinates[1]);
        } else {
            ctx.lineTo(coordinates[0], coordinates[1]);
        }
    })
    ctx.lineTo(coordinateList[0][0], coordinateList[0][1]);
    ctx.stroke();
}

connectsCoordinates(dotsOfBox);
connectsCoordinates(dotList);
