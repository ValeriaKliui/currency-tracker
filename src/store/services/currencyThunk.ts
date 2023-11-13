import { type Currencies } from '@constants/interfaces/interfaces';
import { setIsFetching } from '@store/actions/appActions';
import {
    fetchCurrenciesError,
    setBanksData,
    setConvertedCurrency,
    setCurrencies,
} from '@store/actions/currencyActions';
import { CurrencyAPI } from '@utils/api/api';
import { setCache } from '@utils/cacheData';
import axios, { type AxiosError, isAxiosError } from 'axios';
import { type Dispatch } from 'redux';

export const fetchCurrencyThunk = () => async (dispatch: Dispatch) => {
    try {
        dispatch(setIsFetching(true));
        const res = await CurrencyAPI.getCurrencies();
        dispatch(setIsFetching(false));
        if (res !== null) {
            dispatch(setCurrencies(res));
            setCache<Currencies>('currencyData', res);
        }
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
            dispatch(setIsFetching(true));
            const res = await CurrencyAPI.getConversedCurrency(
                baseCurrencyCode,
                targetCurrencyCode,
            );
            dispatch(setIsFetching(false));
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

export const fetchBanksThunk = () => async (dispatch: Dispatch) => {
    try {
        dispatch(setIsFetching(true));
        const res = await CurrencyAPI.getBanks();
        dispatch(setIsFetching(false));
        res !== null && dispatch(setBanksData(res.results));
    } catch (e) {
        if (axios.isAxiosError<AxiosError<{ message: string }>>(e)) {
            const err =
                e.response !== null ? e.response?.data.message : e.message;
            console.log(err);
        }
    }
};
