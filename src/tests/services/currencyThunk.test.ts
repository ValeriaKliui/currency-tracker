import { type RootState } from '@store/index';
import { fetchCurrencyThunk } from '@store/services/currencyThunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { type AnyAction } from 'redux';
import configureStore from 'redux-mock-store';
import thunk, { type ThunkDispatch } from 'redux-thunk';

import { currenciesData } from '../mocks/mocks';

type DispatchExts = ThunkDispatch<RootState, undefined, AnyAction>;
const middleware = [thunk];
const mockStore = configureStore<RootState, DispatchExts>(middleware);
const mock = new MockAdapter(axios);
const store = mockStore(undefined);

describe('currency thunk', () => {
    const OLD_ENV = process.env;

    beforeEach(() => {
        store.clearActions();
        jest.resetModules();
        process.env = { ...OLD_ENV };
    });
    afterAll(() => {
        process.env = OLD_ENV;
    });
    process.env.REACT_APP_KEY_CURRENCYAPI =
        'cur_live_8sMXemsaQDJ1FHxHEh6Z2UyEui2pcP1VTWJDwoDZ';

    it('Should dispatch currency thunk and fetch currency data', async () => {
        mock.onGet(
            `https://api.currencyapi.com/v3/latest?apikey=${process.env.REACT_APP_KEY_CURRENCYAPI}&currencies=USD,CAD,AUD,EUR,ARS,JPY,CNY,BTC,LTC`,
        ).reply(200, currenciesData);
        mock.onAny().passThrough();

        const expectedActions = [
            { payload: true, type: 'APP/SET_IS_FETCHING' },
            { payload: false, type: 'APP/SET_IS_FETCHING' },
            {
                payload: currenciesData,
                type: 'CURRENCY/SET_CURRENCIES',
            },
        ];

        await store.dispatch(fetchCurrencyThunk()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('Should dispatch currency thunk error if no connection or mistake in url', async () => {
        mock.onGet(
            `https://api.currencyapi.com/v3/latest?apikey=${process.env.REACT_APP_KEY_CURRENCYAPI}&currencies=USD,CAD,AUD,EUR,ARS,JPY,CNY,BTC,LTC`,
        ).networkError();

        const expectedActions = [
            { payload: true, type: 'APP/SET_IS_FETCHING' },
            { payload: false, type: 'APP/SET_IS_FETCHING' },
            {
                payload: currenciesData,
                type: 'CURRENCY/SET_CURRENCIES',
            },
        ];

        await store.dispatch(fetchCurrencyThunk()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
