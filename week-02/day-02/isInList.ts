'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
let numsToSearchFor: number[] = [4, 8, 12, 16];

function checkNums(list: number[]): boolean {
    let output: boolean = true;
    for (let i: number = 0; i < numsToSearchFor.length; i++) {
        if (list.indexOf(numsToSearchFor[i]) < 0) {
            output = false;
        }
    }
    return output;
}

console.log(checkNums(listOfNumbers));

export = checkNums;