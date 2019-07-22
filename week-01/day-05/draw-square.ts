'use strict';

let lineCount: number = 3;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

function drawsASquareOfGivenSize(size: number): void {
    for (let i: number = 0; i < size; i++) {
        let stringToPrint: string = '';
        if (i === size - 1 || i === 0) {
            for (let j: number = 0; j < size; j++) {
                stringToPrint += '%';
            }
        } else {
            for (let k: number = 0; k < size; k++) {
                if (k === 0 || k === size - 1) {
                    stringToPrint += '%';
                } else {
                    stringToPrint += ' ';
                }
            }
        }
        console.log(stringToPrint);
    }
}

drawsASquareOfGivenSize(lineCount);

