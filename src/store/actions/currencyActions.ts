import {
    type BanksData,
    type Currencies,
    type CurrenciesEnum,
} from '@constants/interfaces/interfaces';

export const fetchCurrencies = (currencies: Currencies) => {
    return {
        type: 'CURRENCY/FETCH_CURRENCIES',
        payload: currencies,
    } as const;
};
export const fetchCurrenciesError = (errorStr: string) => {
    return {
        type: 'CURRENCY/FETCH_CURRENCIES_ERROR',
        payload: errorStr,
    } as const;
};
export const setBaseCurrency = (
    baseCurrencyCode: keyof typeof CurrenciesEnum | null,
) => {
    return {
        type: 'CURRENCY/SET_BASE_CURRENCY',
        payload: baseCurrencyCode,
    } as const;
};
export const setTargetCurrency = (
    targetCurrencyCode: keyof typeof CurrenciesEnum | null,
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
export const setBanksData = (banksData: BanksData) => {
    return {
        type: 'CURRENCY/SET_BANKS_DATA',
        payload: banksData,
    } as const;
};
