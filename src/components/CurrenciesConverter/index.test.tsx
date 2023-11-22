import { Provider } from 'react-redux';
import { CurrenciesList } from '@components/CurrenciesList';
import { CurrenciesEnum } from '@constants/interfaces/interfaces';
import { store } from '@store/index';
import { type RootState } from '@store/index';
import { fetchCurrencyThunk } from '@store/services/currencyThunk';
import { fireEvent, render } from '@testing-library/react';
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
const mock = new MockAdapter(axios);
const mockedStore = mockStore(undefined);

describe('currencies converter', () => {
    const OLD_ENV = process.env;

    beforeEach(() => {
        mockedStore.clearActions();
        jest.resetModules();
        process.env = { ...OLD_ENV };
    });
    afterAll(() => {
        process.env = OLD_ENV;
    });
    process.env.REACT_APP_KEY_CURRENCYAPI =
        'cur_live_PAuYjJpmqsxnbB3j7pFLDLytVJAlq0OmKztPjRrz';
    mock.onGet(
        `https://api.currencyapi.com/v3/latest?apikey=${process.env.REACT_APP_KEY_CURRENCYAPI}&currencies=USD,CAD,AUD,EUR,ARS,JPY,CNY,BTC,LTC`,
    ).reply(200, currenciesData);
    mock.onAny().passThrough();

    test('should be rendered on the page after clicking on currency item in list', async () => {
        const { getByTestId, getByText } = render(
            <Provider store={store}>
                <Theme>
                    <CurrenciesConverter />
                    <CurrenciesList />
                </Theme>
            </Provider>,
        );

        await store.dispatch(fetchCurrencyThunk()).then(() => {
            const currenciesConverter = getByTestId('currencies-converter');
            const currencyItem = getByText(CurrenciesEnum.ARS);

            expect(currenciesConverter).not.toBeInTheDocument();
            fireEvent.click(currencyItem);
            expect(currenciesConverter).toBeInTheDocument();
        });
    });
});
