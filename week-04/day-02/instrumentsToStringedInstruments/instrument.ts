'use strict';

import StringedInstrument from './stringedInstrument';

abstract class Instrument {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract play(): void
}

export default Instrument;