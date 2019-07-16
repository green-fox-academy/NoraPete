'use strict';

import Helicopter from './helicopter';
import Bird from './bird';

let myHelikopater: Helicopter = new Helicopter('KA8', 1000001);
let cuteLittleBird: Bird = new Bird('Cute Little Bird');

myHelikopater.fly();
myHelikopater.takeOff();
myHelikopater.land();
console.log(myHelikopater.serialNumber);
console.log(myHelikopater.name);
console.log(myHelikopater.fuelLevel);

cuteLittleBird.fly();
cuteLittleBird.takeOff();
cuteLittleBird.land();
console.log(cuteLittleBird.breed());
console.log(cuteLittleBird.getName());
