'use strict';

import Animal from './animal';

class Reptile extends Animal {
    canControlBodyTempreture: boolean = false;
    hasCervicalRibs: boolean = true;

    breed(): string {
        return 'laying eggs';
    }
}

export default Reptile;
