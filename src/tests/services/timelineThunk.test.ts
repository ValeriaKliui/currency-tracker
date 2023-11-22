import { type RootState } from '@store/index';
import { fetchCurrencyTimelineThunk } from '@store/services/timelineThunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { type AnyAction } from 'redux';
import configureStore from 'redux-mock-store';
import thunk, { type ThunkDispatch } from 'redux-thunk';

import { timelineData } from '../mocks/mocks';

type DispatchExts = ThunkDispatch<RootState, undefined, AnyAction>;

describe('timeline thunk', () => {
    const middleware = [thunk];
    const mockStore = configureStore<RootState, DispatchExts>(middleware);
    const mock = new MockAdapter(axios);
    const store = mockStore(undefined);

    const OLD_ENV = process.env;

    beforeEach(() => {
        store.clearActions();
        jest.resetModules();
        process.env = { ...OLD_ENV };
    });
    afterAll(() => {
        process.env = OLD_ENV;
    });
    process.env.REACT_APP_KEY_OXLCV = '1BF63EF6-881B-4683-A970-B5CAF04BF982';

    it('Should dispatch timeline thunk and fetch timeline data', async () => {
        const targetCurrencyCode = 'BTC';
        const historyDateStart = '2023-10-01';
        const historyDateEnd = '2023-10-11';
        mock.onGet(
            `https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_${targetCurrencyCode}_USD/history?apikey=${process.env.REACT_APP_KEY_OXLCV}&period_id=1DAY&time_start=${historyDateStart}&time_end=${historyDateEnd}`,
        ).reply(200, timelineData);

        const expectedActions = [
            { payload: true, type: 'APP/SET_IS_FETCHING' },
            { payload: false, type: 'APP/SET_IS_FETCHING' },
            {
                payload: timelineData,
                type: 'TIMELINE/FETCH_TIMELINE_HISTORY',
            },
        ];

        await store
            .dispatch(
                fetchCurrencyTimelineThunk(
                    targetCurrencyCode,
                    historyDateStart,
                    historyDateEnd,
                ),
            )
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });
});
