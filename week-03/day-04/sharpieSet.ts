'use strict';

import { Sharpie } from '../day-03/sharpie';

class SharpieSet {
    setOfSharpies: Sharpie[];

    constructor(listOfSharpies: Sharpie[]) {
        this.setOfSharpies = listOfSharpies;
    }

    countUsable(): number {
        let numOfusableSharpies: number = 0;
        for (let i: number = 0; i < this.setOfSharpies.length; i++) {
            if (this.setOfSharpies[i].inkAmount > 0) {
                numOfusableSharpies++;
            }
        }
        return numOfusableSharpies;
    }

    removeTrash(): void {
        this.setOfSharpies = this.setOfSharpies.filter(function (sharpie: Sharpie) {
            return (sharpie.inkAmount > 0);
        })
    }
}


let sharpieOne: Sharpie = new Sharpie('red', 1);
let sharpieTwo: Sharpie = new Sharpie('red', 1);
let sharpieThree: Sharpie = new Sharpie('red', 1);
let sharpieFour: Sharpie = new Sharpie('red', 1);
let sharpieFive: Sharpie = new Sharpie('red', 1);

let sharpieArray: Sharpie[] = [sharpieOne, sharpieTwo, sharpieThree, sharpieFour, sharpieFive];

let mySharpieSet: SharpieSet = new SharpieSet(sharpieArray);
console.log(mySharpieSet.countUsable());
console.log(mySharpieSet.setOfSharpies);

for (let j: number = 0; j < 200; j++) {
    sharpieFour.use();
}

console.log(mySharpieSet.countUsable());
console.log(mySharpieSet.setOfSharpies);
mySharpieSet.removeTrash();
console.log(mySharpieSet.setOfSharpies);
