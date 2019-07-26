'use strict';

function countsBunniesEarsInLine(numOfBunnies: number): number {
    let numOfEars: number;
    if (numOfBunnies % 2 === 1) {
        numOfEars = 2;
    } else {
        numOfEars = 3;
    }
    if (numOfBunnies === 1) {
        return numOfEars;
    } else {
        numOfEars += countsBunniesEarsInLine(numOfBunnies - 1);
    }
    return numOfEars;
}

console.log(countsBunniesEarsInLine(21));
