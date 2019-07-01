'use strict';

// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio (factorialOf: number) : number {
    let factorial: number = 1;
    for (let i: number = 1; i < factorialOf + 1; i ++) {
        factorial *= i;
    }
    return factorial;
}

console.log(factorio(6));
