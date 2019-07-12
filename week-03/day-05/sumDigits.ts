'use strict';

function sumDigits(num: number): number {
    let counter: number = num % 10;
    if (num / 10 >= 1) {
        counter += sumDigits(Math.floor(num / 10));
    }
    return counter;
}


console.log(sumDigits(1234));
