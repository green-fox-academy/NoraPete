'use strict';

import StringedInstrument from './stringedInstrument';

class Violin extends StringedInstrument {
    numberOfStrings: number;

    constructor(numOfStrg: number = 4) {
        super('Violin', numOfStrg);
    }

    sound(): string {
        return 'Screech';
    }
}

export default Violin;