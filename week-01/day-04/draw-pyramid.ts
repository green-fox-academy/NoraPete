'use strict';

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is


function makesStringWithStars(spaces: number, stars: number) : string {
    let stringWithStars: string = '';
    for (let i: number = 0; i < spaces; i ++) {
        stringWithStars += ' ';
    }
    for (let j: number = 0; j < stars; j ++) {
        stringWithStars += '*';
    }
    return stringWithStars
}

let lineCount: number = 4;

for (let k: number = 0; k < lineCount; k ++) {
    let numOfStars: number = 2 * k + 1;
    let numOfSpaces: number = lineCount + k - numOfStars;
    console.log(makesStringWithStars(numOfSpaces, numOfStars));
}
