'use strict';

declare function require(path: string): any;

const fs = require('fs');

// Create a function that
// - takes the name of a CSV file as a parameter,
//   - every row is in the following format: <person name>;<birthdate in YYYY-MM-DD format>;<city name>
// - returns the year when the most births happened.
//   - if there were multiple years with the same number of births then return any one of them

// You can find such a CSV file in this directory named births.csv
// If you pass "births.csv" to your function, then the result should be either 2006, or 2016.

function readsFile(path: string): string {
    if (!fs.existsSync(path)) {
        throw Error('File does not exist.');
    }
    let fileContent: string = fs.readFileSync(path, 'utf-8');
    return fileContent;
}

function collectsBirthYears(content: string): string[] {
    let rows: string[] = content.split('\n');
    let years: string[] = [];
    for (let i: number = 0; i < rows.length; i++) {
        let index: number;
        index = rows[i].search(/;\d{4}-/);
        years.push(rows[i].slice(index + 1, index + 5 - rows[i].length));
    }
    return years;
}

function countsYearOccurances(list: string[]): object {
    let yearsWithOccurance = {};
    list.forEach(function (year) {
        if (yearsWithOccurance[year]) {
            yearsWithOccurance[year] += 1;
        } else {
            yearsWithOccurance[year] = 1;
        }
    })
    return yearsWithOccurance;
}

function getsYearWithMostBirths(path: string): string {
    let fileContent: string;
    try {
        fileContent = readsFile(path);
    } catch (e) {
        console.log(e);
        fileContent = '';
    }
    let listOfYears: string[] = collectsBirthYears(fileContent);
    let yearsWithOccurance = countsYearOccurances(listOfYears);
    let years: string[] = Object.keys(yearsWithOccurance);
    let yearWithMostBirts: string = years[0];
    for (let i: number = 0; i < years.length; i++) {
        if (yearsWithOccurance[years[i]] > yearsWithOccurance[yearWithMostBirts]) {
            yearWithMostBirts = years[i];
        }
    }
    return yearWithMostBirts;
}

console.log(getsYearWithMostBirths('./births.csv'));
