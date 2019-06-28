'use strict';

let lineCount: number = 4;

for (let i: number = 0; i < lineCount; i ++) {
    let numOfStars: number = 2 * i + 1;
    let numOfSpaces: number = lineCount + i - numOfStars;
    console.log(Array(numOfSpaces + 1).join(' ') + Array(numOfStars + 1).join('*'));
}
