'use strict';

import Aircraft from './aircraft';

class F35 extends Aircraft {
    type: string = 'F35';
    priority: boolean = true;
    maxAmmo: number = 12;
    baseDamage: number = 50;
    ammoStorage: number;

    constructor() {
        super();
    }
}

export default F35;
