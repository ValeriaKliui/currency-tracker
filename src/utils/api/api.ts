import type { Quotes } from '@store/reducers/currencies/types';
import axios from 'axios';

// const CURRENCY_KEY2 = '8330C8C1-03DA-43D8-A1E3-9ED6D8D1FAFF';

export const CurrencyAPI = {
    async getQuotes() {
        return await axios
            .get<Quotes[]>(
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
            .get<Quotes>(
                `https://api.currencyapi.com/v3/latest?apikey=${process.env.REACT_APP_KEY_CURRENCYAPI}&currencies=${targetCurrencyCode}&base_currency=${baseCurrencyCode}`,
            )
            .then((response) => response.data);
    },
};
