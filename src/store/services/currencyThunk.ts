import {
    fetchQuotes,
    fetchQuotesError,
    setConvertedCurrency,
} from '@store/actions/currencyActions';
import { CurrencyAPI } from '@utils/api/api';
import axios, { type AxiosError, isAxiosError } from 'axios';
import { type Dispatch } from 'redux';

export const fetchCurrencyThunk = () => async (dispatch: Dispatch) => {
    try {
        const res = await CurrencyAPI.getQuotes();
        if (res !== null) dispatch(fetchQuotes(res));
    } catch (e) {
        if (isAxiosError<AxiosError<{ message: string }>>(e)) {
            const errorStr =
                e.response !== null ? e.response?.statusText : e.message;
            errorStr !== undefined && dispatch(fetchQuotesError(errorStr));
        }
    }
};

export const fetchConversedCurrThunk =
    (baseCurrencyCode: string, targetCurrencyCode: string) =>
    async (dispatch: Dispatch) => {
        try {
            const res = await CurrencyAPI.getConversedCurrency(
                baseCurrencyCode,
                targetCurrencyCode,
            );
            res !== null &&
                dispatch(
                    setConvertedCurrency(res.data[targetCurrencyCode].value),
                );
        } catch (e) {
            if (axios.isAxiosError<AxiosError<{ message: string }>>(e)) {
                const err =
                    e.response !== null ? e.response?.data.message : e.message;
                console.log(err);
            }
        }
    };
