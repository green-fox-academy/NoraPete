'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3


let iterator: number = 0;
let upperEnd: number = 5;

let sum: number = 0;

while (iterator < upperEnd) {
    iterator ++;
    sum += iterator;
}

console.log('Sum: ' + sum);
console.log('Average: ' + sum / upperEnd);

