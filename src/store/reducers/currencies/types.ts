import { type CurrenciesEnum } from '@constants/interfaces/interfaces';
import type {
    fetchQuotes,
    fetchQuotesError,
    setBaseCurrency,
    setConvertedCurrency,
    setTargetCurrency,
} from '@store/actions/currencyActions';

export interface Currency {
    code: keyof typeof CurrenciesEnum;
    value: number;
}
export interface Quotes {
    meta: { last_updated_at: string };
    data: Record<
        string,
        {
            code: keyof typeof CurrenciesEnum;
            value: number;
        }
    >;
}
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
    quotes: Quotes | null;
    error: string | null;
    baseCurrencyCode: keyof typeof CurrenciesEnum | null;
    targetCurrencyCode: keyof typeof CurrenciesEnum | null;
    convertedCurrencyValue: number | null;
}
export type CurrencyActions =
    | ReturnType<typeof fetchQuotes>
    | ReturnType<typeof fetchQuotesError>
    | ReturnType<typeof setBaseCurrency>
    | ReturnType<typeof setTargetCurrency>
    | ReturnType<typeof setConvertedCurrency>;
