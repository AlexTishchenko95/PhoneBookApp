import { PHONES_ACTION, PhonesActions } from './phones.action';
import { PhonePosition } from '../phone-position.model';

const initialState = {
    phoneList: [
        new PhonePosition('Михайлов', 'Алексей', 'Архипович', '+375 29 121 51 36'),
        new PhonePosition('Мудячко', 'Кирилл', 'Иосифович', '+375 25 162 16 44'),
        new PhonePosition('Бойцов', 'Евгений', 'Онегинович', '+375 33 495 87 38')
    ]
};

export function phonesReducer(state = initialState, action: PhonesActions) {
    switch (action.type) {
        case PHONES_ACTION.ADD_NUMBER:
            return {
                ...state,
                phoneList: [...state.phoneList, action.payload]
            };
        case PHONES_ACTION.DELETE_NUMBER:
            state.phoneList.splice(action.payload.id, 1);
            return {
                ...state,
                phoneList: [...state.phoneList]
            };
        case PHONES_ACTION.FAVORITE_NUMBER:
            const elem = state.phoneList.splice(action.payload.id, 1);
            return {
                ...state,
                phoneList: [elem[0], ...state.phoneList]
            };
        default:
            return state;
    }
}
