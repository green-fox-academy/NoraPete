'use strict';

class Person {
    name: string = `Jane Doe`;
    age: number = 30;
    gender: string = `female`;

    constructor(name?: string, age?: number, gender?: string) {
        if (name) {
            this.name = name;
        }
        if (age) {
            this.age = age;
        }
        if (gender) {
            this.gender = gender;
        }
    }

    introduce(): void {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}.`);
    }

    getGoal(): void {
        console.log(`My goal is: Live for the moment!`);
    }
}

export default Person;
