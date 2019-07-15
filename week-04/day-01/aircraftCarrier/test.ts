'use strict';

import Aircraft from './aircraft';
import F16 from './f16';
import F35 from './f35';
import Carrier from './carrier';

let aircraftOne: F16 = new F16();
let aircraftTwo: F16 = new F16();
let aircraftThree: F16 = new F16();
let aircraftFive: F16 = new F16();
let aircraftFour: F16 = new F16();
let aircraftSix: F35 = new F35();
let aircraftSeven: F35 = new F35();
let aircraftEight: F35 = new F35();
let aircraftNine: F16 = new F16();
let aircraftTen: F35 = new F35();
let aircraftEleven: F16 = new F16();
let myCarrier: Carrier = new Carrier(3000, 3000);
let yourCarrier: Carrier = new Carrier(10, 6000);

myCarrier.add(aircraftOne);
myCarrier.add(aircraftTwo);
myCarrier.add(aircraftThree);
myCarrier.add(aircraftFour);
myCarrier.add(aircraftFive);
myCarrier.add(aircraftSix);
myCarrier.add(aircraftSeven);
myCarrier.add(aircraftEight);
myCarrier.add(aircraftNine);
myCarrier.add(aircraftTen);
myCarrier.add(aircraftEleven);


myCarrier.fill();
myCarrier.getStatus();

myCarrier.fight(yourCarrier);
myCarrier.getStatus();
yourCarrier.getStatus();