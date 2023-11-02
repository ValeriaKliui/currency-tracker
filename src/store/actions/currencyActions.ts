import { CurrenciesEnum } from '@constants/interfaces/interfaces';
import type { IQuotes } from '@store/reducers/currencies/types';

export const fetchQuotes = (quotes: IQuotes) => {
    return {
        type: 'CURRENCY/FETCH_QUOTES',
        payload: quotes,
    } as const;
};
export const fetchQuotesError = (errorStr: string) => {
    return {
        type: 'CURRENCY/FETCH_QUOTES_ERROR',
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
