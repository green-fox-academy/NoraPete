'use strict';

import Vehicle from './vehicle';
import Flyable from './flyable';

class Helicopter extends Vehicle implements Flyable {
    fly(): void {
        console.log(`I believe I can fly!`);
    }

    land(): void {
        console.log(`I am landing now`);
    }

    takeOff(): void {
        console.log(`I am taking off now`);
    }
}

export default Helicopter;
