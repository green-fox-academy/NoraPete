'use strinct';

import StringedInstrument from './stringedInstrument';

class BassGuitar extends StringedInstrument {
    numberOfStrings: number;

    constructor(numOfStrg: number = 4) {
        super('Bass Guitar', numOfStrg);
    }

    sound(): string {
        return 'Duum-duum-duum';
    }
}

export default BassGuitar;
