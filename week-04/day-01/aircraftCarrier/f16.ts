'use strict';

import Aircraft from './aircraft';

class F16 extends Aircraft {
    type: string = 'F16';
    priority: boolean = false;
    maxAmmo: number = 8;
    baseDamage: number = 30;
    ammoStorage: number;

    constructor() {
        super();
    }
}

export default F16;
