'use strict';

import Person from './person';

class Sponsor extends Person {
    company: string = 'Google';
    hiredStudents: number = 0;

    constructor(name?: string, age?: number, gender?: string, company?: string) {
        super(name, age, gender);
        if (company) {
            this.company = company;
        }
    }

    introduce(): void {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
    }

    getGoal(): void {
        console.log('My goal: Hire brilliant junior sofware developers.');
    }

    hire(): void {
        this.hiredStudents++;
    }
}

export default Sponsor;
