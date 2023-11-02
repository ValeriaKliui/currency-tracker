import type { ICurrencyActions, ICurrencyState } from './types';

const initialState: ICurrencyState = {
    quotes: null,
    error: null,
    baseCurrencyCode: null,
    targetCurrencyCode: null,
    convertedCurrencyValue: null,
};

export const currencyReducer = (
    state = initialState,
    action: ICurrencyActions,
): ICurrencyState => {
    switch (action.type) {
        case 'CURRENCY/FETCH_QUOTES': {
            return {
                ...state,
                quotes: action.payload,
            };
        }
        case 'CURRENCY/FETCH_QUOTES_ERROR': {
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
