import { type CurrenciesEnum } from '@constants/interfaces/interfaces';
import type {
    fetchQuotes,
    fetchQuotesError,
} from '@store/actions/currencyActions';

export interface ICurrency {
    code: keyof typeof CurrenciesEnum;
    value: number;
}
export interface IQuotes {
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
export interface ICurrencyState {
    quotes: IQuotes | null;
    error: string | null;
    baseCurrencyCode: keyof typeof CurrenciesEnum | null;
    targetCurrencyCode: keyof typeof CurrenciesEnum | null;
    convertedCurrencyValue: number | null;
}

export type ICurrencyActions =
    | ReturnType<typeof fetchQuotes>
    | ReturnType<typeof fetchQuotesError>;
