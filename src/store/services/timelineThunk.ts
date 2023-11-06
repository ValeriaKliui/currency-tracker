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
            const res = await CurrencyAPI.getCurrencyTimeline(
                targetCurrencyCode,
                historyDateStart,
                historyDateEnd,
            );
            res !== null && dispatch(fetchTimelineHistory(res));
        } catch (e) {
            if (axios.isAxiosError<AxiosError<{ message: string }>>(e)) {
                const err =
                    e.response !== null ? e.response?.data.message : e.message;
                console.log(err);
            }
        }
    };
