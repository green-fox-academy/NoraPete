'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let codingHoursInADay: number = 6;
let workingDaysInAWeek: number = 5;
let weeksInASemester: number = 17;
let averageWorkingHoursInAWeek: number = 52;

let codingHoursInASemester: number = codingHoursInADay * workingDaysInAWeek * weeksInASemester;
let codingOfWorkingHours: number = ((codingHoursInADay * workingDaysInAWeek) / averageWorkingHoursInAWeek) * 100;

console.log('Coding hours in a semester: ' + codingHoursInASemester + ' h');
console.log('Percentage of coding: ' + codingOfWorkingHours.toFixed(2) + '%');
