'use strict';

function checksIfArmstrongNumber(inputNum: number): string {
    let brokenDownNum: number[] = [];
    let num: number = inputNum;
   while (num >= 1) {
       brokenDownNum.push(num % 10);
       num = Math.floor(num / 10);
   }
   let sumOfDigitsOnNthPower: number = 0;
   brokenDownNum.forEach(function (digit) {
       sumOfDigitsOnNthPower += digit ** brokenDownNum.length;
   })
   if (sumOfDigitsOnNthPower === inputNum) {
       return `${inputNum} is an Armstrong number.`
   } else {
       return `${inputNum} is not an Armstrong number.`
   }
}

console.log (checksIfArmstrongNumber(0))