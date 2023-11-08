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
            return {
                ...state,
                inputValueBankCard: action.payload,
            };
        }
        default:
            return state;
    }
};
