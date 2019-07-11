'use strict';

import { Animal } from '../day-03/animal';

class Farm {
    listOfAnimals: Animal[];
    slots: number;

    constructor(listOfAnimals: Animal[], capacity: number) {
        if (capacity - listOfAnimals.length >= 0) {
            this.listOfAnimals = listOfAnimals;
        } else {
            this.listOfAnimals = [];
            for (let i: number = 0; i < capacity; i++) {
                this.listOfAnimals.push(listOfAnimals[i]);
            }
        }
        this.slots = capacity - this.listOfAnimals.length;

    }

    breed(): void {
        if (this.slots > 0) {
            let newAnimal: Animal = new Animal();
            this.listOfAnimals.push(newAnimal);
        }
    }

    slaughter(): void {
        let leastHungryAnimal: Animal;
        for (let i: number = 0; i < this.listOfAnimals.length; i++) {
            if (i === 0) {
                leastHungryAnimal = this.listOfAnimals[i];
            } else if (this.listOfAnimals[i].hunger < leastHungryAnimal.hunger) {
                leastHungryAnimal = this.listOfAnimals[i];
            }
        }
        this.listOfAnimals.splice(this.listOfAnimals.indexOf(leastHungryAnimal), 1);
    }
}

let animalOne: Animal = new Animal();
let animalTwo: Animal = new Animal();
let animalThree: Animal = new Animal();
let animalFour: Animal = new Animal();
let animalFive: Animal = new Animal();

let animalArray: Animal[] = [animalOne, animalTwo, animalThree, animalFour, animalFive];

let myFarm: Farm = new Farm(animalArray, 7);
console.log(myFarm.listOfAnimals);

animalFive.eat();
myFarm.breed();
console.log(myFarm.listOfAnimals);

myFarm.slaughter();
console.log(myFarm.listOfAnimals);
