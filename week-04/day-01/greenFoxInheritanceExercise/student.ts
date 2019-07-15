'use strict';

import Person from './person';

class Student extends Person {
    previousOrganization: string = `The School of Life`;
    skippedDays: number = 0;

    constructor(name?: string, age?: number, gender?: string, previousOrganization?: string) {
        super(name, age, gender);
        if (previousOrganization) {
            this.previousOrganization = previousOrganization;
        }
    }

    introduce(): void {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} from the course already.`);
    }

    getGoal(): void {
        console.log(`My goal is: Be a junior sofware developer.`);
    }

    skipDays(numberOfDays: number): void {
        this.skippedDays += numberOfDays;
    }
}

export default Student;
