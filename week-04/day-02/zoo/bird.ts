'use strict';

import Animal from './animal';

class Bird extends Animal {
    hasBeaks: boolean = true;
    hasFeathers: boolean = true;

    breed(): string {
        return 'laying eggs';
    }
}

export default Bird;
