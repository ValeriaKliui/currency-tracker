import { type BankCardActions, type BankCardState } from './types';

const initialState: BankCardState = {
    inputValueBankCard: '',
};
export const bankCardReducer = (
    state = initialState,
    action: BankCardActions,
): BankCardState => {
    switch (action.type) {
        case 'BANKCARD/SET_INPUT_VALUE_BANK_CARD': {
            console.log(action.payload);
            return {
                ...state,
                inputValueBankCard: action.payload,
            };
        }
        default:
            console.log('action.payload');
            return state;
    }
};
