'use strict';

import Animal from '../zoo/animal';
import Flyable from './flyable';

class Bird extends Animal implements Flyable {
    breed(): string {
        return 'Eggs';
    }
    fly(): void {
        console.log(`Let's follow the unicorn!`);
    }

    takeOff(): void {
        console.log(`Let's get out of here!`);
    }

    land(): void {
        console.log(`Let's rest here!`);
    }
}

export default Bird;
