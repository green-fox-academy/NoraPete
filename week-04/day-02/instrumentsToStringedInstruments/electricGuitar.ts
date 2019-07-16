'use strict';

import StringedInstrument from './stringedInstrument';

class ElectricGuitar extends StringedInstrument {
    numberOfStrings: number;

    constructor(numOfStrg: number = 6) {
        super('Electric Guitar', numOfStrg);
    }

    sound(): string {
        return 'Twang';
    }
}

export default ElectricGuitar;
