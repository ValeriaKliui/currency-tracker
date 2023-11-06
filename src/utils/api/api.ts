import {
    type Currencies,
    type TimelineDayData,
} from '@constants/interfaces/interfaces';
import axios from 'axios';

export const CurrencyAPI = {
    async getCurrencies() {
        return await axios
            .get<Currencies[]>(
                // `https://api.currencyapi.com/v3/latest?apikey=${CURRENCY_KEY}&currencies=USD,CAD,AUD,EUR,ARS,JPY,CNY,BTC,LTC`,
                'https://6540914a45bedb25bfc2188a.mockapi.io/test',
            )
            .then((response) => response.data[0]);
    },
    async getConversedCurrency(
        baseCurrencyCode: string,
        targetCurrencyCode: string,
    ) {
        return await axios
            .get<Currencies>(
                `https://api.currencyapi.com/v3/latest?apikey=${process.env.REACT_APP_KEY_CURRENCYAPI}&currencies=${targetCurrencyCode}&base_currency=${baseCurrencyCode}`,
            )
            .then((response) => response.data);
    },
    async getCurrencyTimeline(
        targetCurrencyCode: string,
        historyDateStart: string,
        historyDateEnd: string,
    ) {
        return await axios
            .get<TimelineDayData[]>(
                `https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_${targetCurrencyCode}_USD/history?apikey=${process.env.REACT_APP_KEY_OXLCV}&period_id=1DAY&time_start=${historyDateStart}&time_end=${historyDateEnd}`,

                // `https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/history?apikey=${CURRENCY_KEY}&period_id=1DAY&time_start=2023-10-02T00:00:00&time_end=2023-10-02T23:59:59`,
            )
            .then((response) => response.data);
    },
};
