'use strict';

abstract class Vehicle {
    name: string;
    fuelLevel: number = 0;
    serialNumber: number;

    constructor(name: string, serial: number) {
        this.name = name;
        this.serialNumber = serial;
    }
 }

 export default Vehicle;