'usen strict';

export class postIt {
    backgroundColor: string;
    textOnIt: string;
    textColor: string;
    constructor(backColor: string, text: string, textColor: string) {
        this.backgroundColor = backColor;
        this.textOnIt = text;
        this.textColor = textColor;
    }
}

let myFirstPostIt: postIt = new postIt('orange', 'Idea 1', 'blue');
let mySecondPostIt: postIt = new postIt('pink', 'Awesome', 'black');
let myThirdPostIt: postIt = new postIt('yellow', 'Superbe!', 'green');

console.log(myFirstPostIt, mySecondPostIt, myThirdPostIt);
