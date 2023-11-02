import type {
    CurrenciesEnum,
    IQuotes,
    RootStoreType,
} from '@constants/interfaces/interfaces';

export const getQuotesSelector = (state: RootStoreType): IQuotes | null =>
    state.currencies.quotes;
export const getQuotesError = (state: RootStoreType): string | null =>
    state.currencies.error;
export const getBaseCurrencySelector = (
    state: RootStoreType,
): keyof typeof CurrenciesEnum | null => state.currencies.baseCurrencyCode;
export const getTargetCurrencySelector = (
    state: RootStoreType,
): keyof typeof CurrenciesEnum | null => state.currencies.targetCurrencyCode;
export const getConvertedCurrencyValue = (
    state: RootStoreType,
): number | null => state.currencies.convertedCurrencyValue;