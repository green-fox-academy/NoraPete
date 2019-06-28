'use strict';

let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

if (lineCount % 2 == 0) {
    let half: number = lineCount / 2;
    for (let i: number = 0; i < half; i ++) {
        let numOfStars: number = 2 * i + 1;
        let numOfSpaces: number = half + i - numOfStars;
        console.log(Array(numOfSpaces + 1).join(' ') + Array(numOfStars + 1).join('*'));
    }
    for (let i: number = 0; i < half; i ++) {
        let numOfStars: number = lineCount - 1 - i * 2;
        let numOfSpaces: number = i;
        console.log(Array(numOfSpaces + 1).join(' ') + Array(numOfStars + 1).join('*'));
    }
} else {
    let half: number = (lineCount + 1) / 2;
    for (let i: number = 0; i < half; i ++) {
        let numOfStars: number = 2 * i + 1;
        let numOfSpaces: number = half + i - numOfStars;
        console.log(Array(numOfSpaces + 1).join(' ') + Array(numOfStars + 1).join('*'));
    }
    for (let i: number = 0; i < half; i ++) {
        let numOfStars: number = lineCount - (i + 1) * 2;
        let numOfSpaces: number = i + 1;
        console.log(Array(numOfSpaces + 1).join(' ') + Array(numOfStars + 1).join('*'));
    }
}