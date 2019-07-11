'use strict';

class Sharpie {
    color: string;
    width: number;
    inkAmount: number = 100;

    constructor(color: string, width: number) {
        this.color = color;
        this.width = width;
    }

    use(): void {
        this.inkAmount--;
    }
}

export { Sharpie };

let myFirstSharpie: Sharpie = new Sharpie('green', 0.5);
console.log(myFirstSharpie);
myFirstSharpie.use();
console.log(myFirstSharpie);
