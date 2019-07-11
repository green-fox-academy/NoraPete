'use strict';

import { Car } from './car';

class Station {
    gasAmount: number;

    constructor(gasAmount: number) {
        this.gasAmount = gasAmount;
    }

    refill(car: Car) {
        this.gasAmount -= car.capacity;
        car.gasAmount += car.capacity;
    }
}

let myGasStation: Station = new Station(10000);
let myCar: Car = new Car();

console.log(myCar.gasAmount);
console.log(myGasStation.gasAmount);

myGasStation.refill(myCar);

console.log(myCar.gasAmount);
console.log(myGasStation.gasAmount);
