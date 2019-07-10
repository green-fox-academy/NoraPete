'use strict';

import { Thing } from './thing';
import { Fleet } from './fleet';

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well 

//let fleet: Fleet = new Fleet();
let milk: Thing = new Thing('Get milk');
let obstacles: Thing = new Thing('Remove the obstacles');
let standUp: Thing = new Thing('Stand up');
let lunch: Thing = new Thing('Eat lunch');

standUp.complete();
lunch.complete();

class FleetOfThings {
    private fleetOfThings: Fleet;

    constructor() {
        this.fleetOfThings = new Fleet();
    }

    main(thing: Thing): void {
        this.fleetOfThings.add(thing);
    }

    print(): string {
        let returnMessage: string = '';
        let arrayOfThings: Thing[] = this.fleetOfThings.getThings();
        arrayOfThings.forEach(function (element) {
            returnMessage += arrayOfThings.indexOf(element) + 1 + '. ';
            if (element.getCompleted()) {
                returnMessage += '[x] ';
            } else {
                returnMessage += '[ ] ';
            }
            returnMessage += element.getName() + '\n';
        })

        return returnMessage;
    }
}

let newFleetOfThings: FleetOfThings = new FleetOfThings();
newFleetOfThings.main(milk);
newFleetOfThings.main(obstacles);
newFleetOfThings.main(standUp);
newFleetOfThings.main(lunch);

console.log(newFleetOfThings.print());
