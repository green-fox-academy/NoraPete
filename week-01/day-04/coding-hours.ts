'use strict';

let codingHoursInADay: number = 6;
let workingDaysInAWeek: number = 5;
let weeksInASemester: number = 17;
let averageWorkingHoursInAWeek: number = 52;

let codingHoursInASemester: number = codingHoursInADay * workingDaysInAWeek * weeksInASemester;
let codingOfWorkingHours: number = ((codingHoursInADay * workingDaysInAWeek * weeksInASemester) / (averageWorkingHoursInAWeek * weeksInASemester)) * 100;

console.log('Coding hours in a semester: ' + codingHoursInASemester + ' h');
console.log('Percentage of coding: ' + codingOfWorkingHours.toFixed(2) + '%');