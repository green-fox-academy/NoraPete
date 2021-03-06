'use strict';

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

const secondsInADay: number = 24 * 60 * 60;
const minutesCoeff: number = 60;
const hoursCoeff: number = 60 * 60;

let remainingSeconds: number = secondsInADay - (currentHours * hoursCoeff + currentMinutes * minutesCoeff + currentSeconds);

console.log('The day is over in ' + remainingSeconds + ' seconds!!!!');