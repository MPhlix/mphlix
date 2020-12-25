import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ObjectHelper {

    constructor() {
    }

    isNullOrUndefined(value: any) {
        return value === null || value === undefined;
    }

    isNullOrEmpty(value: any) {
        return value === '' || this.isNullOrUndefined(value);
    }

    isEmptyOrZero(value: any) {
        return value === 0 || this.isNullOrEmpty(value);
    }
}
