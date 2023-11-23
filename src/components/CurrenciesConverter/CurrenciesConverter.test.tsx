import { Provider } from 'react-redux';
import { CurrenciesEnum } from '@constants/interfaces/interfaces';
import { Home } from '@pages/Home';
import { store } from '@store/index';
import { type RootState } from '@store/index';
import {
    fetchConversedCurrThunk,
    fetchCurrencyThunk,
} from '@store/services/currencyThunk';
import { act, fireEvent, render } from '@testing-library/react';
import { Theme } from '@utils/ThemeProvider';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { type AnyAction } from 'redux';
import configureStore from 'redux-mock-store';
import thunk, { type ThunkDispatch } from 'redux-thunk';

import { currenciesData } from '../../tests/mocks/mocks';

import { CurrenciesConverter } from '.';

type DispatchExts = ThunkDispatch<RootState, undefined, AnyAction>;
const middleware = [thunk];
const mockStore = configureStore<RootState, DispatchExts>(middleware);
let mock: MockAdapter;
const mockedStore = mockStore(undefined);

const mockCurrencies = () => {
    mock.onGet(
        `https://api.currencyapi.com/v3/latest?apikey=${process.env.REACT_APP_KEY_CURRENCYAPI}&currencies=USD,CAD,AUD,EUR,ARS,JPY,CNY,BTC,LTC`,
    ).reply(200, currenciesData);
    mock.onAny().passThrough();
    store.dispatch(fetchCurrencyThunk() as unknown as AnyAction);
};

const mockConvertedValue = (targetCurrencyCode: string) => {
    mock.onGet(
        `https://api.currencyapi.com/v3/latest?apikey=${process.env.REACT_APP_KEY_CURRENCYAPI}&currencies=${targetCurrencyCode}&base_currency=USD`,
    ).reply(200, currenciesData);
    mock.onAny().passThrough();
    store.dispatch(
        fetchConversedCurrThunk('USD', 'AUD') as unknown as AnyAction,
    );
};

describe('currencies converter', () => {
    const OLD_ENV = process.env;

    beforeEach(() => {
        mockedStore.clearActions();
        mock = new MockAdapter(axios);
        process.env = { ...OLD_ENV };
    });
    afterEach(() => {
        mock.reset();
    });
    afterAll(() => {
        process.env = OLD_ENV;
        mock.restore();
    });
    process.env.REACT_APP_KEY_CURRENCYAPI =
        'cur_live_8sMXemsaQDJ1FHxHEh6Z2UyEui2pcP1VTWJDwoDZ';

    test('should open converter after click and set base currency', async () => {
        mockCurrencies();

        const { getAllByText } = await act(async () =>
            render(
                <Provider store={store}>
                    <Theme>
                        <Home />
                    </Theme>
                </Provider>,
            ),
        );

        const currencyItem = getAllByText(CurrenciesEnum.ARS);
        expect(store.getState().app.isModalOpened).toBe(false);
        fireEvent.click(currencyItem[0]);
        expect(store.getState().app.isModalOpened).toBe(true);
        expect(store.getState().currencies.baseCurrencyCode).toBe('ARS');
    });

    test('should choose target currency after click on currency options', () => {
        const { getAllByTestId } = render(
            <Provider store={store}>
                <Theme>
                    <CurrenciesConverter />
                </Theme>
            </Provider>,
        );

        const currencyItems = getAllByTestId('currency-item');
        const lastCurrencyItem = currencyItems[currencyItems.length - 1];
        const currencyCodes = Object.keys(CurrenciesEnum).sort((a, b) =>
            a.localeCompare(b),
        );
        const lastCurrencyCode = currencyCodes[currencyCodes.length - 1];

        fireEvent.click(lastCurrencyItem);
        expect(store.getState().currencies.targetCurrencyCode).toBe(
            lastCurrencyCode,
        );
    });

    test('should display converted value after choosing target currency', async () => {
        const targetCurrencyCode = 'AUD';
        mockConvertedValue(targetCurrencyCode);

        const { findByText } = await act(async () =>
            render(
                <Provider store={store}>
                    <Theme>
                        <CurrenciesConverter />
                    </Theme>
                </Provider>,
            ),
        );
        const currencyItem = findByText(targetCurrencyCode);
        fireEvent.click(await currencyItem);
        expect(store.getState().currencies.convertedCurrencyValue).not.toEqual(
            null,
        );
    });
});
