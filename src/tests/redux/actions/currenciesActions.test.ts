import {
    fetchCurrenciesError,
    setBanksData,
    setBaseCurrency,
    setConvertedCurrency,
    setCurrencies,
    setCurrencyAmount,
    setTargetCurrency,
} from '@store/actions/currencyActions';

import { banksData, currenciesData } from '../../mocks/mocks';

describe('setCurrencies', () => {
    test('should create an action to set currencies', () => {
        const currencies = currenciesData;
        const expectedAction = {
            type: 'CURRENCY/SET_CURRENCIES',
            payload: currencies,
        };

        expect(setCurrencies(currencies)).toEqual(expectedAction);
    });
});

describe('fetchCurrenciesError', () => {
    test('should create an action to currencies error after fetching', () => {
        const error = 'something is wrong';
        const expectedAction = {
            type: 'CURRENCY/FETCH_CURRENCIES_ERROR',
            payload: error,
        };

        expect(fetchCurrenciesError(error)).toEqual(expectedAction);
    });
});

describe('setBaseCurrency', () => {
    test('should create an action to set base currency', () => {
        const baseCurrencyCode = 'AUD';
        const expectedAction = {
            type: 'CURRENCY/SET_BASE_CURRENCY',
            payload: baseCurrencyCode,
        };

        expect(setBaseCurrency(baseCurrencyCode)).toEqual(expectedAction);
    });
});

describe('setTargetCurrency', () => {
    test('should create an action to set target currency', () => {
        const targetCurrencyCode = 'CAD';
        const expectedAction = {
            type: 'CURRENCY/SET_TARGET_CURRENCY',
            payload: targetCurrencyCode,
        };

        expect(setTargetCurrency(targetCurrencyCode)).toEqual(expectedAction);
    });
});

describe('setConvertedCurrency', () => {
    test('should create an action to set converted currency', () => {
        const convertedValue = 4234.23;
        const expectedAction = {
            type: 'CURRENCY/SET_CONVERTED_CURRENCY',
            payload: convertedValue,
        };

        expect(setConvertedCurrency(convertedValue)).toEqual(expectedAction);
    });
});

describe('setCurrencyAmount', () => {
    test('should create an action to set currency amount', () => {
        const currencyAmount = 34;
        const expectedAction = {
            type: 'CURRENCY/SET_CURRENCY_AMOUNT',
            payload: currencyAmount,
        };

        expect(setCurrencyAmount(currencyAmount)).toEqual(expectedAction);
    });
});

describe('setBanksData', () => {
    test('should create an action to set banks data', () => {
        const expectedAction = {
            type: 'CURRENCY/SET_BANKS_DATA',
            payload: banksData,
        };

        expect(setBanksData(banksData)).toEqual(expectedAction);
    });
});
