import {
    type Bank,
    type Currencies,
    type CurrencyCodeType,
} from '@constants/interfaces/interfaces';

export const setCurrencies = (currencies: Currencies) => {
    return {
        type: 'CURRENCY/SET_CURRENCIES',
        payload: currencies,
    } as const;
};
export const fetchCurrenciesError = (errorStr: string) => {
    return {
        type: 'CURRENCY/FETCH_CURRENCIES_ERROR',
        payload: errorStr,
    } as const;
};
export const setBaseCurrency = (baseCurrencyCode: CurrencyCodeType | null) => {
    return {
        type: 'CURRENCY/SET_BASE_CURRENCY',
        payload: baseCurrencyCode,
    } as const;
};
export const setTargetCurrency = (
    targetCurrencyCode: CurrencyCodeType | null,
) => {
    return {
        type: 'CURRENCY/SET_TARGET_CURRENCY',
        payload: targetCurrencyCode,
    } as const;
};
export const setConvertedCurrency = (convertedValue: number) => {
    return {
        type: 'CURRENCY/SET_CONVERTED_CURRENCY',
        payload: convertedValue,
    } as const;
};
export const setCurrencyAmount = (amount: number) => {
    return {
        type: 'CURRENCY/SET_CURRENCY_AMOUNT',
        payload: amount,
    } as const;
};
export const setBanksData = (banksData: Bank[]) => {
    return {
        type: 'CURRENCY/SET_BANKS_DATA',
        payload: banksData,
    } as const;
};
