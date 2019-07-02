'use strict';

let expenses: number[] = [500, 1000, 1250, 175, 800, 120];

function sumOfExpenses (expList: number[]): number {
    let sum: number = 0;
    expList.forEach(function (num) {
        sum += num;
    })
    return sum;
}

function findMax (expList: number[]): number {
    let maxOfList: number = 0;
    expList.forEach(function (num) {
        if (expList.indexOf(num) === 0) {
            maxOfList = num;
        } else if (num > maxOfList) {
            maxOfList = num;
        }
    })
    return maxOfList;
}

function findMin (expList: number[]): number {
    let minOfList: number = 0;
    expList.forEach(function (num) {
        if (expList.indexOf(num) === 0) {
            minOfList = num;
        } else if (num < minOfList) {
            minOfList = num;
        }
    })
    return minOfList;
}

function averageExpense (expList: number[]): string {
    let averExp: string = (sumOfExpenses(expList) / expList.length).toFixed(2);
    return averExp;
}

function personalFinance (expList: number[]): string {
    return 'You spent ' + sumOfExpenses(expList) + '\nYour greatest expense was ' + findMax(expList) + '\nYour cheapest spending was ' + findMin(expList) + '\nYou spent ' + averageExpense(expList) + ' in average';
}

console.log(personalFinance(expenses));
