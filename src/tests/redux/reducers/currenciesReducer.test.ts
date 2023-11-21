import {
    fetchCurrenciesError,
    setBanksData,
    setBaseCurrency,
    setConvertedCurrency,
    setCurrencies,
    setCurrencyAmount,
    setTargetCurrency,
} from '@store/actions/currencyActions';
import { currencyReducer } from '@store/reducers/currencies';

import { banksData, currenciesData } from '../../mocks/mocks';

describe('currencies reducer', () => {
    it('should handle CURRENCIES/SET_CURRENCIES', () => {
        const currencies = currenciesData;
        const action = setCurrencies(currencies);
        const newState = currencyReducer(undefined, action);
        expect(newState).toEqual({
            ...newState,
            currencies,
        });
    });

    it('should handle CURRENCIES/FETCH_CURRENCIES_ERROR', () => {
        const error = 'something went completely wrong';
        const action = fetchCurrenciesError(error);
        const newState = currencyReducer(undefined, action);
        expect(newState).toEqual({
            ...newState,
            error,
        });
    });

    it('should handle CURRENCIES/SET_CONVERTED_CURRENCY', () => {
        const convertedCurrencyValue = 2342.23;
        const action = setConvertedCurrency(convertedCurrencyValue);
        const newState = currencyReducer(undefined, action);
        expect(newState).toEqual({
            ...newState,
            convertedCurrencyValue,
        });
    });

    it('should handle CURRENCIES/SET_BASE_CURRENCY', () => {
        const baseCurrencyCode = 'EUR';
        const action = setBaseCurrency(baseCurrencyCode);
        const newState = currencyReducer(undefined, action);
        expect(newState).toEqual({
            ...newState,
            baseCurrencyCode,
        });
    });

    it('should handle CURRENCIES/SET_TARGET_CURRENCY', () => {
        const targetCurrencyCode = 'USD';
        const action = setTargetCurrency(targetCurrencyCode);
        const newState = currencyReducer(undefined, action);
        expect(newState).toEqual({
            ...newState,
            targetCurrencyCode,
        });
    });

    it('should handle CURRENCIES/SET_CURRENCY_AMOUNT', () => {
        const currencyAmount = 40;
        const action = setCurrencyAmount(currencyAmount);
        const newState = currencyReducer(undefined, action);
        expect(newState).toEqual({
            ...newState,
            currencyAmount,
        });
    });

    it('should handle CURRENCIES/SET_BANKS_DATA', () => {
        const action = setBanksData(banksData);
        const newState = currencyReducer(undefined, action);
        expect(newState).toEqual({
            ...newState,
            banksData,
        });
    });
});
