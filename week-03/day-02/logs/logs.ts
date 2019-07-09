'use strict';

declare function require(path: string): any;

const fs = require('fs');

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

let logBook: string;
let logLines: string[];
let splitLogLines: string[][] = [];
try {
    logBook = fs.readFileSync('log.txt', 'utf-8');
} catch (e) {
    console.log('something is wrong with the file');
    logBook = '';
}
try {
    logLines = logBook.split('/');
} catch (e) {
    console.log('couldn\'t split by /');
    logLines = [];
}
try {
    logLines.forEach(function (element) {
        let lineArray: string[] = element.split('  ');
        splitLogLines.push(lineArray);
    })
} catch (e) {
    console.log('couldn\'t divide by double spaces');
}

function uniqueIPs(log: string[][]): string[] {
    let selectedIPs: string[] = [];
    log.forEach(function (oneLine) {
        if (selectedIPs.indexOf(oneLine[2]) < 0) {
            selectedIPs.push(oneLine[2]);
        }
    })
    return selectedIPs;
}
console.log(uniqueIPs(splitLogLines));

function countsGetPostRatio(log: string[][]): number {
    let numOfGet: number = 0;
    let numOfPost: number = 0;
    log.forEach(function (lines) {
        if (lines[3] != undefined) {
            if (lines[3].indexOf('GET') > -1) {
                numOfGet++;
            } else if (lines[3].indexOf('POST') > -1) {
                numOfPost++;
            }
        }
    })
    return numOfGet / numOfPost;
}

console.log(countsGetPostRatio(splitLogLines));
