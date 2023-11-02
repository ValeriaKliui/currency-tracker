import { fetchQuotes, fetchQuotesError } from '@store/actions/currencyActions';
import { CurrencyAPI } from '@utils/api/api';
import { type AxiosError, isAxiosError } from 'axios';
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
