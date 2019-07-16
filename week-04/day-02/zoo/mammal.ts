'use strict';

import Animal from './animal';

class Mammal extends Animal {
    numberOfHairs: number = 3478;

    breed(): string {
        return 'pushing miniature versions out';
    }

    controlBodyTemperature(temperature: number): void {
        if (temperature < 20) {
            console.log('I am trembeling!!!!');
        } else if (temperature > 30) {
            console.log('I am sweating !!!!!');
        }
    }
}

export default Mammal;
