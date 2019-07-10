'use strict';

class Animal {
    hunger: number = 50;
    thirst: number = 50;
    eat(): void {
        this.hunger--;
    }
    drink(): void {
        this.thirst--;
    }
    play(): void {
        this.hunger++;
        this.thirst++;
    }
}

let waczak: Animal = new Animal;
console.log(waczak);
waczak.play();
console.log(waczak);
waczak.eat();
console.log(waczak);
