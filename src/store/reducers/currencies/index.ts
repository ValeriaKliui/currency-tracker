import type { CurrencyActions, CurrencyState } from './types';

const initialState: CurrencyState = {
    currencies: null,
    error: null,
    baseCurrencyCode: null,
    targetCurrencyCode: null,
    convertedCurrencyValue: null,
    banksData: null,
    currencyAmount: 1,
};

export const currencyReducer = (
    state = initialState,
    action: CurrencyActions,
): CurrencyState => {
    switch (action.type) {
        case 'CURRENCY/SET_CURRENCIES': {
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
        case 'CURRENCY/SET_CURRENCY_AMOUNT': {
            return {
                ...state,
                currencyAmount: action.payload,
            };
        }
        case 'CURRENCY/SET_BANKS_DATA': {
            return {
                ...state,
                banksData: action.payload,
            };
        }
        default:
            return state;
    }
};
