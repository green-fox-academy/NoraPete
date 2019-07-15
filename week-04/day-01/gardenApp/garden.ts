'use strict';

import Plant from './plant';
import Tree from './tree';
import Flower from './flower';

class Garden {
    plants: Plant[];

    constructor() {
        this.plants = [];
    }

    addPlant(plant: Plant): void {
        this.plants.push(plant);
    }

    stateOfGarden(): void {
        this.plants.forEach(function (plant) {
            console.log(plant.getStatus());
        })
    }

    waterPlants(amountOfWater: number): void {
        console.log(`Watering with ${amountOfWater}`);
        let plantsToWater: Plant[] = [];
        this.plants.forEach(function (plant) {
            if (plant.needsWatering) {
                plantsToWater.push(plant);
            }
        })
        plantsToWater.forEach(function (plant) {
            plant.water(amountOfWater / plantsToWater.length);
        })
        this.plants.forEach(function (plant) {
            console.log(plant.getStatus());
        })
    }
}

export default Garden;
