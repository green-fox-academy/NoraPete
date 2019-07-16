'use strict';

import Reservationy from './reservationIF';

class Reservation implements Reservationy {
    listOfReservations: string[];

    constructor() {
        this.listOfReservations = [];
    }

    getCodeBooking(): string {
        let output: string = '';
        let characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ012345679';
        for (let i: number = 0; i < 8; i++) {
            output += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return output;
    }

    getDowBooking(): string {
        let daysOfWeek: string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        return daysOfWeek[Math.floor(Math.random() * 7)];
    }

    getResult(numberOfResults: number): void {
        for (let i: number = 0; i < numberOfResults; i++) {
            console.log(`Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`);
        }
    }
}

export default Reservation;
