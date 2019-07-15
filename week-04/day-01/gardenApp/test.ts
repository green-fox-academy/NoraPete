'use strict';

import Plant from './plant';
import Tree from './tree';
import Flower from './flower';
import Garden from './garden';

let yellowFlower: Flower = new Flower('yellow');
let blueFlower: Flower = new Flower('blue');
let purlpleTree: Tree = new Tree('purple');
let orangeTree: Tree = new Tree('orange');
let myGarden: Garden = new Garden();

myGarden.addPlant(yellowFlower);
myGarden.addPlant(blueFlower);
myGarden.addPlant(purlpleTree);
myGarden.addPlant(orangeTree);

myGarden.stateOfGarden();

myGarden.waterPlants(40);
myGarden.waterPlants(70);