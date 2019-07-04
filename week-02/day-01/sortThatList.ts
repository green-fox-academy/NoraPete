'use strict';

//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

function bubble(numsToSort: number[]): number[] {
    let sortedNums: number[] = [];
    let iteration: number = numsToSort.length;
    for (let i: number = 0; i < iteration; i++) {
        let numToPush: number = numsToSort.reduce(function (a, b) {
            let min: number = 0;
            if (a < b) {
                min = a;
            } else {
                min = b;
            }
            return min;
        })
        sortedNums.push(numToPush);
        numsToSort.splice(numsToSort.indexOf(numToPush), 1);
    }
    return sortedNums;
}

function advancedBubble(numsToSort: number[], direction: boolean): number[] {
    let sortedNums: number[] = [];
    let iteration: number = numsToSort.length;
    for (let i: number = 0; i < iteration; i++) {
        let numToPush: number = numsToSort.reduce(function (a, b) {
            let min: number = 0;
            if (a < b) {
                min = a;
            } else {
                min = b;
            }
            return min;
        })
        sortedNums.push(numToPush);
        numsToSort.splice(numsToSort.indexOf(numToPush), 1);
    }
    if (direction) {
        return sortedNums.reverse();
    } else {
        return sortedNums;
    }
}

//  Example:
console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]