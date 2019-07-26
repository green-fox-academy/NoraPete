'use strict';

function countsBunniesEars(numOfBunnies: number): number {
    let numOfEars: number = 2;
    if (numOfBunnies === 1) {
        return 2;
    } else {
        numOfEars += countsBunniesEars(numOfBunnies - 1);
    }
    return numOfEars;
}

console.log(countsBunniesEars(10));
