'use strict';

import Aircraft from './aircraft';

class Carrier {
    listOfAircrafts: Aircraft[];
    storedAmmo: number = 0;
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
       let ammoToUse: number = this.storedAmmo;
        let priorityList: Aircraft[] = this.listOfAircrafts.filter(function (aircraft) {
                return (aircraft.isPriority())
        });
        priorityList.forEach(function (aircraft) {
            ammoToUse = aircraft.refill(ammoToUse);
        })
        this.listOfAircrafts.forEach(function (aircraft) {
            ammoToUse = aircraft.refill(ammoToUse);
        })
        this.storedAmmo = ammoToUse;
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