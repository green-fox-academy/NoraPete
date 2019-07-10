'usen strict';

export class PostIt {
    backgroundColor: string;
    textOnIt: string;
    textColor: string;
    
    constructor(backColor: string, text: string, textColor: string) {
        this.backgroundColor = backColor;
        this.textOnIt = text;
        this.textColor = textColor;
    }
}

let myFirstPostIt: PostIt = new PostIt('orange', 'Idea 1', 'blue');
let mySecondPostIt: PostIt = new PostIt('pink', 'Awesome', 'black');
let myThirdPostIt: PostIt = new PostIt('yellow', 'Superbe!', 'green');

console.log(myFirstPostIt, mySecondPostIt, myThirdPostIt);
