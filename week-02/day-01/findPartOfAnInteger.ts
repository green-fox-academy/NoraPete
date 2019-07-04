'use strict';

//  Create a function that takes a number and an array of numbers as a parameter
//  Returns the indices of the numbers in the array of which the first number is a part of
//  Or returns an empty list if the number is not part of any of the numbers in the array

function subint(findThis: number, inThis: number[]): number[] {
    let appearances: number[] = [];
    let splitArray: number[][] = [];
    inThis.forEach(function (numToSplit) {
        let splitNum: number[] = [];
        for (let i: number = 1; i - 1 <= Math.abs(numToSplit); i *= 10) {
            splitNum.push(numToSplit % 10);
        }
        splitArray.push(splitNum);
    })
    splitArray.forEach(function (splitNumsArray) {
        if (splitNumsArray.indexOf(findThis) > -1) {
            appearances.push(splitArray.indexOf(splitNumsArray));
        }
    })
    return appearances;
}

// Example
console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(subint(9, [1, 11, 34, 52, 61]));
// should print: '[]'
