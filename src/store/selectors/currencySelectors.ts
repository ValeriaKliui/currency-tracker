import type {
    Currencies,
    CurrencyCodeType,
} from '@constants/interfaces/interfaces';
import { type RootStoreType } from '@store/types/interfaces';

export const getCurrenciesSelector = (
    state: RootStoreType,
): Currencies | null => state.currencies.currencies;
export const getCurrenciesError = (state: RootStoreType): string | null =>
    state.currencies.error;
export const getBaseCurrencySelector = (
    state: RootStoreType,
): CurrencyCodeType | null => state.currencies.baseCurrencyCode;
export const getTargetCurrencySelector = (
    state: RootStoreType,
): CurrencyCodeType | null => state.currencies.targetCurrencyCode;
export const getConvertedCurrencyValue = (
    state: RootStoreType,
): number | null => state.currencies.convertedCurrencyValue;
export const getCurrencyAmount = (state: RootStoreType): number =>
    state.currencies.currencyAmount;
