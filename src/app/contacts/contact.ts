module app.domain {
    'use strict';
    export interface IContact {
        id: number;
        name: string;
        phone: string;
        email: string;
        imageUrl: string;
    }

    /**
     * Contact implements IContact
     */
    export class Contact implements IContact {
        constructor(public id: number,
                    public name: string,
                    public phone: string,
                    public email: string,
                    public imageUrl: string) {
            
        }
    }
}