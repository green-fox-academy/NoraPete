'use strict';

import Aircraft from './aircraft';

class Carrier {
    listOfAircrafts: Aircraft[];
    storedAmmo: number;
    healthPoints: number;

    constructor(storedAmmo: number, healthPoints: number) {
        this.listOfAircrafts = [];
        this.storedAmmo = storedAmmo;
        this.healthPoints = healthPoints;
    }

    add(aircraft: Aircraft): void {
        this.listOfAircrafts.push(aircraft);
    }

    fill(): void {
        this.listOfAircrafts.forEach(function (aircraft) {
            if (aircraft.isPriority) {
                aircraft.refill(this.storedAmmo);
            }
        })
        this.listOfAircrafts.forEach(function (aircraft) {
                aircraft.refill(this.storedAmmo);
        })
    }

    fight(carrierToFight: Carrier): void {
        let totalDamage: number = 0;
        this.listOfAircrafts.forEach(function (aircraft) {
            totalDamage += aircraft.fight();
        })
        carrierToFight.healthPoints -= totalDamage;
    }

    getStatus(): void {
        if (this.healthPoints > 0) {
            let totalDamage: number = 0;
            this.listOfAircrafts.forEach(function (aircraft) {
                totalDamage += aircraft.baseDamage * aircraft.ammoStorage;
            })
            console.log(`HP: ${this.healthPoints}, Aircraft Count: ${this.listOfAircrafts.length}, Ammo Storage: ${this.storedAmmo}, Total Damage ${totalDamage}`);
            this.listOfAircrafts.forEach(function (aircraft) {
                console.log(aircraft.getStatus());
            })
        } else {
            console.log(`It's dead Jim :(`)
        }
    }
}

export default Carrier;