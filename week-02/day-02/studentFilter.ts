'use strict';

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function getsStudentsWithMoreThanFourCandies(listOfStudents: any[]): string[] {
    let richStudents: string[] = [];
    listOfStudents.forEach(function (student) {
        if (student.candies > 4) {
            richStudents.push(student.name);
        }
    })
    return richStudents;
}

function getsAverageOfCandies(listOfStudents: any[]): number {
    let sum: number = 0;
    listOfStudents.forEach(function (student) {
        sum += student.candies;
    })
    return sum / listOfStudents.length;
}

console.log(getsStudentsWithMoreThanFourCandies(students));
console.log(getsAverageOfCandies(students));
