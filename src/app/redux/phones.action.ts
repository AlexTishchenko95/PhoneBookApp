import { Action } from '@ngrx/store';
import { PhonePosition } from '../phone-position.model';

// tslint:disable-next-line: no-namespace
export namespace PHONES_ACTION {
    export const ADD_NUMBER = 'ADD_NUMBER';
    export const DELETE_NUMBER = 'DELETE_NUMBER';
    export const FAVORITE_NUMBER = 'FAVORITE_NUMBER';
}

export type PhonesActions = AddNumber | DeleteNumber | FavoriteNumber;

export class AddNumber implements Action {
    readonly type = PHONES_ACTION.ADD_NUMBER;

    constructor(public payload: PhonePosition) { }
}

export class DeleteNumber implements Action {
    readonly type = PHONES_ACTION.DELETE_NUMBER;

    constructor(public payload: { id: number }) { }
}

export class FavoriteNumber implements Action {
    readonly type = PHONES_ACTION.FAVORITE_NUMBER;

    constructor(public payload: { id: number }) { }
}


