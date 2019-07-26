'use strict';

declare function require(path: string): any;

const fs = require('fs');

// Create a method that find the 5 most common lottery numbers in lottery.csv

function readsFile(path: string): string {
    if (!fs.existsSync(path)) {
        throw Error('File does not exist');
    }
    return fs.readFileSync(path, 'utf-8');
}

function getsLotteryNumberQuintetts(inputStr: string): string[][] {
    let lines: string[] = inputStr.split('\r\n');
    let lotteryNums: string[][] = [];
    for (let i: number = 0; i < lines.length; i++) {
        let indexOfNums: number = lines[i].search(/\d+;\d+;\d+;\d+;\d+$/);
        lotteryNums.push(lines[i].slice(indexOfNums).split(';'));
    }
    return lotteryNums;
}

function countsSingleNumsOccurance(lotteryNums: string[][]): object {
    let numsWithOccurance = {};
    for (let i: number = 0; i < lotteryNums.length; i++) {
        lotteryNums[i].forEach(function (num) {
            if (numsWithOccurance[num]) {
                numsWithOccurance[num] += 1;
            } else {
                numsWithOccurance[num] = 1;
            }
        })
    }
    return numsWithOccurance;
}

function getsFiveMostCommonLotteryNums(path: string): string {
    let fileContent: string;
    try {
        fileContent = readsFile(path);
    } catch (e) {
        console.log(e);
        fileContent = '';
    }
    let lotteryNumsMatrix: string[][] = getsLotteryNumberQuintetts(fileContent);
    let numsWithOccurance: object = countsSingleNumsOccurance(lotteryNumsMatrix);
    let keys: string[] = Object.keys(numsWithOccurance);
    let orderedNums: string[] = [];
    while (keys.length > 0) {
        let actualMax: string = keys[0];
        for (let i: number = 0; i < keys.length; i++) {
            if (numsWithOccurance[keys[i]] > numsWithOccurance[actualMax]) {
                actualMax = keys[i];
            }
        }
        orderedNums.push(actualMax);
        keys.splice(keys.indexOf(actualMax), 1);
    }
    return `The 5 most common lottery numbers are ${orderedNums[0]}, ${orderedNums[1]}, ${orderedNums[2]}, ${orderedNums[3]}, ${orderedNums[4]}`;
}

//getsFiveMostCommonLotteryNums('./lottery.csv');
console.log(getsFiveMostCommonLotteryNums('./lottery.csv'));