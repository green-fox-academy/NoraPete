'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(listOfGirls: string[], listOfBoys: string[]): string[] {
    let joindList: string[] = [];
    for (let i: number = 0; i < listOfGirls.length; i++) {
        joindList.push(listOfGirls[i]);
        if (listOfBoys[i]) {
            joindList.push(listOfBoys[i]);
        }
    }
    if (listOfGirls.length < listOfBoys.length) {
        for (let j: number = listOfGirls.length; j < listOfBoys.length; j++) {
            joindList.push(listOfBoys[j]);
        }
    }
    return joindList;
}

console.log(makingMatches(girls, boys));

export = makingMatches;