import { Bar } from 'react-chartjs-2';
import { Provider } from 'react-redux';
import { Select } from '@components/Select';
import { CURRENCIES_HISTORY_AVAILABLE } from '@constants/constants/currencies';
import { type Currency } from '@constants/interfaces/interfaces';
import { store } from '@store/index';
import { type RootState } from '@store/index';
import { fetchCurrencyThunk } from '@store/services/currencyThunk';
import { fetchCurrencyTimelineThunk } from '@store/services/timelineThunk';
import { act, fireEvent, render } from '@testing-library/react';
import { configChart } from '@utils/configChart';
import { formatDate } from '@utils/formatDate';
import { getAvailableCurrencies } from '@utils/getAvailableCurrencies';
import { Theme } from '@utils/ThemeProvider';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    TimeSeriesScale,
    Title,
    Tooltip,
} from 'chart.js';
import { type AnyAction } from 'redux';
import configureStore from 'redux-mock-store';
import thunk, { type ThunkDispatch } from 'redux-thunk';

import 'chartjs-adapter-date-fns';

import { currenciesData, timelineData } from '../../tests/mocks/mocks';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    TimeSeriesScale,
);

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

const mockTimeline = (
    targetCurrencyCode: string,
    historyDateStart: string,
    historyDateEnd: string,
) => {
    mock.onGet(
        `https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_${targetCurrencyCode}_USD/history?apikey=${process.env.REACT_APP_KEY_OXLCV}&period_id=1DAY&time_start=${historyDateStart}&time_end=${historyDateEnd}`,
    ).reply(200, timelineData);
    mock.onAny().passThrough();
    store.dispatch(
        fetchCurrencyTimelineThunk(
            targetCurrencyCode,
            historyDateStart,
            historyDateEnd,
        ) as unknown as AnyAction,
    );
};

describe('timeline block', () => {
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
    process.env.REACT_APP_KEY_OXLCV = '1BF63EF6-881B-4683-A970-B5CAF04BF982';

    test('', async () => {
        mockCurrencies();
    });

    test('should display timeline chart after choosing parameters', async () => {
        const targetCurrencyCode = 'BTC';
        mockTimeline(
            targetCurrencyCode,
            formatDate(new Date().setMonth(new Date().getMonth() - 1)),
            formatDate(new Date()),
        );
        const { data, options, plugins } = configChart(timelineData);
        const selectOptions = getAvailableCurrencies(
            currenciesData,
            (currency: Currency) =>
                CURRENCIES_HISTORY_AVAILABLE.includes(currency.code),
        );

        const { getByTestId, getAllByTestId } = await act(async () =>
            render(
                <Provider store={store}>
                    <Theme>
                        <Select
                            options={selectOptions}
                            testID="currency-selector"
                        />
                        <Bar
                            data={data}
                            options={options}
                            plugins={plugins}
                            data-testid="timeline-bar"
                        />
                    </Theme>
                </Provider>,
            ),
        );

        const currencyItems = getAllByTestId('currency-option');
        const firstCurrencyItem = currencyItems[0];
        fireEvent.click(firstCurrencyItem);

        const timelineBar = getByTestId('timeline-bar');
        expect(timelineBar).toBeInTheDocument();
    });
});
