import {
    fetchCurrencies,
    fetchCurrenciesError,
    setConvertedCurrency,
} from '@store/actions/currencyActions';
import { CurrencyAPI } from '@utils/api/api';
import axios, { type AxiosError, isAxiosError } from 'axios';
import { type Dispatch } from 'redux';

export const fetchCurrencyThunk = () => async (dispatch: Dispatch) => {
    try {
        const res = await CurrencyAPI.getCurrencies();
        if (res !== null) dispatch(fetchCurrencies(res));
    } catch (e) {
        if (e !== null && isAxiosError<AxiosError<{ message: string }>>(e)) {
            const errorStr =
                e.response !== undefined ? e.response?.statusText : e.message;
            errorStr !== undefined && dispatch(fetchCurrenciesError(errorStr));
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
