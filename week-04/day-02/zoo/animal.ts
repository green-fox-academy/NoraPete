'use strict';

abstract class Animal {
    readonly name: string;
    readonly age: number = 0;
    gender: string;
    hungerLevel: number = 20;
    thirsty: boolean = true;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
    abstract breed(): string

    eat(): void {
        this.hungerLevel--;
    }

    drink(): void {
        this.thirsty = false;
    }
}

export default Animal;
