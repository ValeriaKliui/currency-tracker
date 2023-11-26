import { setIsFetching } from '@store/actions/appActions';
import { fetchTimelineHistory } from '@store/actions/timelineActions';
import { CurrencyAPI } from '@utils/api/api';
import axios, { type AxiosError } from 'axios';
import { type Dispatch } from 'redux';

export const fetchCurrencyTimelineThunk =
    (
        targetCurrencyCode: string,
        historyDateStart: string,
        historyDateEnd: string,
    ) =>
    async (dispatch: Dispatch) => {
        try {
            dispatch(setIsFetching(true));
            const res = await CurrencyAPI.getCurrencyTimeline(
                targetCurrencyCode,
                historyDateStart,
                historyDateEnd,
            );
            dispatch(setIsFetching(false));
            res !== null && dispatch(fetchTimelineHistory(res));
        } catch (e) {
            dispatch(setIsFetching(false));
            if (axios.isAxiosError<AxiosError<{ message: string }>>(e)) {
                const err =
                    e.response !== null ? e.response?.data.message : e.message;
                console.log(err);
            }
        }
    };
