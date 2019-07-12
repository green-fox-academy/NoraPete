'use strict';

class Person {
    name: string = 'Jane Doe';
    age: number = 30;
    gender: string = 'female';

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
        console.log(`Hi, I'm ${this.name}, a ${this.age} year-old ${this.gender}.`);
    }

    getGoal(): void {
        console.log('My goal is: Live for the moment!');
    }
}

class Student {
    name: string = 'Jane Doe';
    age: number = 30;
    gender: string = 'female';
    previousOrganization: string = 'The School of Life';
    skippedDays: number = 0;

    constructor(name?: string, age?: number, gender?: string, previousOrganization?: string) {
        if (name) {
            this.name = name;
        }
        if (age) {
            this.age = age;
        }
        if (gender) {
            this.gender = gender;
        }
        if (previousOrganization) {
            this.previousOrganization = previousOrganization;
        }
    }

    introduce(): void {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year-old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
    }

    getGoal(): void {
        console.log('Be a junior software developer.');
    }

    skipDays(numberOfDays: number): void {
        this.skippedDays += numberOfDays;
    }
}

class Mentor {
    name: string = 'Jane Doe';
    age: number = 30;
    gender: string = 'female';
    level: string = 'intermediate';

    constructor(name?: string, age?: number, gender?: string, level?: string) {
        if (name) {
            this.name = name;
        }
        if (age) {
            this.age = age;
        }
        if (gender) {
            this.gender = gender;
        }
        if (level) {
            this.level = level;
        }
    }

    introduce(): void {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year-old ${this.gender} ${this.level} mentor.`);
    }

    getGoal(): void {
        console.log('Educate brilliant junior sofware developers.');
    }
}

class Sponsor {
    name: string = 'Jane Doe';
    age: number = 30;
    gender: string = 'female';
    company: string = 'Google';
    hiredStudents: number = 0;

    constructor(name?: string, age?: number, gender?: string, company?: string) {
        if (name) {
            this.name = name;
        }
        if (age) {
            this.age = age;
        }
        if (gender) {
            this.gender = gender;
        }
        if (company) {
            this.company = company;
        }
    }

    introduce(): void {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year-old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
    }

    getGoal(): void {
        console.log('Hire brilliant software developers.');
    }

    hire(): void {
        this.hiredStudents++;
    }
}

let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
    elon.hire();
}

for (let i = 0; i < 4; i++) {
    sponsor.hire();
}

for (let person of people) {
    person.introduce();
    person.getGoal();
}