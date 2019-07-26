'use strict';

function solvesJosephusProblem(numOfPeople: number): number {
    let circle: number[] = [];
    for (let i: number = 1; i <= numOfPeople; i++) {
        circle.push(i);
    }
    let indexOfNumToCross: number = 1;
    while (circle.length > 1) {
        circle.splice(indexOfNumToCross, 1);
        indexOfNumToCross++
        if (indexOfNumToCross > circle.length - 1) {
            indexOfNumToCross = indexOfNumToCross - circle.length;
        }
    }
    return circle[0];
}

console.log(solvesJosephusProblem(1));
console.log(solvesJosephusProblem(2));
console.log(solvesJosephusProblem(3));
console.log(solvesJosephusProblem(7));
console.log(solvesJosephusProblem(12));
console.log(solvesJosephusProblem(41));
