'use strict';

let firstNumber: number = 1;
let lastNumber: number = 8;

let summa: number = 0;

while (firstNumber < lastNumber + 1) {
    summa += firstNumber;
    firstNumber ++;
}

console.log('Sum: ' + summa);
console.log('Average: ' + summa / lastNumber);
