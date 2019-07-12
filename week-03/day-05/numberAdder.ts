'use strict';

function addsNumbersTillN(num: number): number {
    let counter: number = 0;
    counter += num;
    if (num > 0) {
        addsNumbersTillN(num - 1);
    }
    return counter;
   
}

console.log(addsNumbersTillN(6));
