'use strict';

class Aircraft {
    type: string;
    priority: boolean;
    maxAmmo: number;
    baseDamage: number;
    ammoStorage: number;

    constructor() {
        this.ammoStorage = 0;
    }

    fight(): number {
        let returnNum: number = this.ammoStorage * this.baseDamage;
        this.ammoStorage = 0;
        return returnNum;
    }

    refill(providedAmmo: number): number {
        let neededAmmo: number = this.maxAmmo - this.ammoStorage;
        if (providedAmmo <= neededAmmo) {
            this.ammoStorage += providedAmmo;
        } else {
            this.ammoStorage = this.maxAmmo;
        }
        return providedAmmo - neededAmmo;
    }

    getType(): string {
        return this.type;
    }

    getStatus(): string {
        return `Type ${this.type}, Ammo: ${this.ammoStorage}, Base Damage: ${this.baseDamage}, All Damage: ${this.ammoStorage * this.baseDamage}`;
    }

    isPriority(): boolean {
        return this.priority;
    }
}

export default Aircraft;