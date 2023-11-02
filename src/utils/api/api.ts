import type { IQuotes } from '@store/reducers/currencies/types';
import axios from 'axios';

// const CURRENCY_KEY = 'cur_live_5L7Ta2w0PhqPOwE1VNfS3YhxXVWHZwayHFb6hbh5';
// const CURRENCY_KEY2 = '8330C8C1-03DA-43D8-A1E3-9ED6D8D1FAFF';

export const CurrencyAPI = {
    async getQuotes() {
        return await axios
            .get<IQuotes[]>(
                // `https://api.currencyapi.com/v3/latest?apikey=${CURRENCY_KEY}&currencies=USD,CAD,AUD,EUR,ARS,JPY,CNY,BTC,LTC`,
                'https://6540914a45bedb25bfc2188a.mockapi.io/test',
            )
            .then((response) => response.data[0]);
    },
};
