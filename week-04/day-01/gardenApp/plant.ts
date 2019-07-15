'use strict';

class Plant {
    colour: string = 'green';
    waterLevel: number = 0;
    waterLevelThreshold: number = 7;
    wateringCoefficient: number = 0.6;
    needsWatering: boolean = true;
    className: string = 'Plant';

    constructor(colour?: string) {
        if (colour) {
            this.colour = colour;
        }
    }

    water(amountOfWater: number): void {
        this.waterLevel += this.wateringCoefficient * amountOfWater;
        if(this.waterLevel < this.waterLevelThreshold) {
            this.needsWatering = true;
        } else {
            this.needsWatering = false;
        }
    }

    getStatus(): string {
        if (this.needsWatering) {
            return `The ${this.colour} ${this.className} needs water`;
        } else {
            return `The ${this.colour} ${this.className} doesnt need water`;
        }
    }
}

export default Plant;
