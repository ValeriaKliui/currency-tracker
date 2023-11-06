import type { CurrencyActions, CurrencyState } from './types';

const initialState: CurrencyState = {
    currencies: null,
    error: null,
    baseCurrencyCode: null,
    targetCurrencyCode: null,
    convertedCurrencyValue: null,
};

export const currencyReducer = (
    state = initialState,
    action: CurrencyActions,
): CurrencyState => {
    switch (action.type) {
        case 'CURRENCY/FETCH_CURRENCIES': {
            return {
                ...state,
                currencies: action.payload,
            };
        }
        case 'CURRENCY/FETCH_CURRENCIES_ERROR': {
            return {
                ...state,
                error: action.payload,
            };
        }
        case 'CURRENCY/SET_CONVERTED_CURRENCY': {
            return {
                ...state,
                convertedCurrencyValue: action.payload,
            };
        }
        case 'CURRENCY/SET_BASE_CURRENCY': {
            return {
                ...state,
                baseCurrencyCode: action.payload,
            };
        }
        case 'CURRENCY/SET_TARGET_CURRENCY': {
            return {
                ...state,
                targetCurrencyCode: action.payload,
            };
        }
        default:
            return state;
    }
};
