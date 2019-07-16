'use strict';

import StringedInstrument from './stringedInstrument';

class Violin extends StringedInstrument {

    constructor(numOfStrg: number = 4) {
        super('Violin', numOfStrg);
    }

    sound(): string {
        return 'Screech';
    }
}

export default Violin;