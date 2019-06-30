'use strict';

// Print the Body mass index (BMI) based on these values

let massInKg: number = 81.2;
let heightInM: number = 1.78;

let bmi: number = massInKg / (heightInM ** 2);

console.log(bmi.toFixed(2));