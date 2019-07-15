'use strict';

import Person from './person';

class Mentor extends Person {
    level: string = 'intermediate';

    constructor(name?: string, age?: number, gender?: string, level?: string) {
        super(name, age, gender);
        if (level) {
            this.level = level;
        }
    }

    introduce(): void {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
    }

    getGoal(): void {
        console.log('My goal is: Educate brilliant junior software developers.')
    }
}

export default Mentor;
