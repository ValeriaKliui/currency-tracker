// import * as currencyActions from '@store/actions/timelineActions';
// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';
// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';

// import { timelineData } from '../mocks/mocks';

// describe('timeline thunk', () => {
//     const middleware = [thunk];
//     const mockStore = configureMockStore(middleware);
//     const store = mockStore();
//     const mock = new MockAdapter(axios);

//     beforeEach(() => {
//         store.clearActions();
//     });

//     it('dispatches FETCH_TIMELINE_HISTORY after a successfull API requets', () => {
//         mock.onGet(`https://rest.coinapi.io/v1/ohlcv/`).reply(200, {
//             response: timelineData,
//         });

//         store.dispatch(currencyActions.fetchTimelineHistory(timelineData));
//         const expectedActions = [
//             {
//                 type: 'TIMELINE/FETCH_TIMELINE_HISTORY',
//                 payload: timelineData,
//             },
//         ];
//         expect(store.getActions()).toEqual(expectedActions);
//     });
// });
// import { type RootState } from '@store/index';
// import { fetchCurrencyTimelineThunk } from '@store/services/timelineThunk';
// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';
// import { type AnyAction } from 'redux';
// import configureStore from 'redux-mock-store';
// import thunk, { type ThunkDispatch } from 'redux-thunk';

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
    const store = mockStore({});

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

    it('GHDKKFKKDK', async () => {
        // const targetCurrencyCode = 'BTC';
        // const historyDateStart = '2023-09-11';
        // const historyDateEnd = '2023-09-23';
        mock.onGet(
            'https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/history?apikey=1BF63EF6-881B-4683-A970-B5CAF04BF982&period_id=1DAY&time_start=2023-10-21&time_end=2023-11-21',
        ).reply(200, timelineData);
        mock.onAny().passThrough();

        const expectedActions = [
            {
                payload: true,
                type: 'APP/SET_IS_FETCHING',
            },
        ];

        await store
            .dispatch(
                fetchCurrencyTimelineThunk('AUD', '2023-10-01', '2023-10-11'),
            )
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });
});
