'use strict';

let codingHoursInADay: number = 6;
let workingDaysInAWeek: number = 5;
let weeksInASemester: number = 17;
let averageWorkingHoursInAWeek: number = 52;

console.log( codingHoursInADay * workingDaysInAWeek * weeksInASemester);
console.log(((codingHoursInADay * workingDaysInAWeek * weeksInASemester) / (averageWorkingHoursInAWeek * weeksInASemester)) * 100);