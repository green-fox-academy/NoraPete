'use strict';

// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

function sum (sumUntil: number) : number {
    let summa: number = 0;
    for (let i: number = 0; i < sumUntil + 1; i ++) {
        summa += i;
    }
    return summa;
}

console.log(sum(5));
