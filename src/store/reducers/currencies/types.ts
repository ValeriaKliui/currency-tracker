import {
    type Bank,
    type Currencies,
    type CurrenciesEnum,
} from '@constants/interfaces/interfaces';
import type {
    fetchCurrenciesError,
    setBanksData,
    setBaseCurrency,
    setConvertedCurrency,
    setCurrencies,
    setCurrencyAmount,
    setTargetCurrency,
} from '@store/actions/currencyActions';

export interface ITimelineDayData {
    price_close: number;
    price_high: number;
    price_low: number;
    price_open: number;
    time_close: string;
    time_open: string;
    time_period_end: string;
    time_period_start: string;
    trades_count: number;
    volume_traded: number;
}
export interface CurrencyState {
    currencies: Currencies | null;
    error: string | null;
    baseCurrencyCode: keyof typeof CurrenciesEnum | null;
    targetCurrencyCode: keyof typeof CurrenciesEnum | null;
    convertedCurrencyValue: number | null;
    banksData: Bank[] | null;
    currencyAmount: number;
}
export type CurrencyActions =
    | ReturnType<typeof setCurrencies>
    | ReturnType<typeof fetchCurrenciesError>
    | ReturnType<typeof setBaseCurrency>
    | ReturnType<typeof setTargetCurrency>
    | ReturnType<typeof setConvertedCurrency>
    | ReturnType<typeof setCurrencyAmount>
    | ReturnType<typeof setBanksData>;
