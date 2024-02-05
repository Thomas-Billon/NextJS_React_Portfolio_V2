import { Euler, Quaternion } from 'three';

// Extend Euler class to include slerp method
declare module 'three' {
    interface Euler {
        slerp(e: Euler, a: number): void
    }
}

// Convert temporarily Euler to Quaternion to make use of slerp and to avoid gimbal lock <- IMPORTANT
Euler.prototype.slerp = function (e: Euler, a: number): void {
    const qStart = new Quaternion().setFromEuler(this);
    const qEnd = new Quaternion().setFromEuler(e);

    qStart.slerp(qEnd, a);

    this.setFromQuaternion(qStart);
}