// import { Provider } from 'react-redux';
// // import { CurrenciesList } from '@components/CurrenciesList';
// // import { CurrenciesEnum } from '@constants/interfaces/interfaces';
// // import { Home } from '@pages/Home';
// import Timeline from '@pages/Timeline';
import { store } from '@store/index';
import { type RootState } from '@store/index';
import { fetchCurrencyThunk } from '@store/services/currencyThunk';
// import { act, render } from '@testing-library/react';
// import { Theme } from '@utils/ThemeProvider';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { type AnyAction } from 'redux';
import configureStore from 'redux-mock-store';
import thunk, { type ThunkDispatch } from 'redux-thunk';

import { currenciesData } from '../../tests/mocks/mocks';

// import { CurrenciesConverter, TimelineBlock } from '.';

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

// const mockTimeline=()=>{
//     mock.onGet(
//         `https://api.currencyapi.com/v3/latest?apikey=${process.env.REACT_APP_KEY_CURRENCYAPI}&currencies=USD,CAD,AUD,EUR,ARS,JPY,CNY,BTC,LTC`,
//     ).reply(200, currenciesData);
//     mock.onAny().passThrough();
//     store.dispatch(fetchCurrencyThunk() as unknown as AnyAction);
// }
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
        'cur_live_PAuYjJpmqsxnbB3j7pFLDLytVJAlq0OmKztPjRrz';

    test('should show timeline block after selecting period', async () => {
        mockCurrencies();
        // const { getAllByTestId } = await act(async () =>
        //     render(
        //         <Provider store={store}>
        //             <Theme>
        //                 <Timeline />
        //             </Theme>
        //         </Provider>,
        //     ),
        // );
        // const currencyItems = getAllByTestId('currency-item');
        // const firstCurrencyItem = currencyItems[0];

        // screen.debug();

        // const timelineChart = findByTestId('timeline-chart');
        // expect(timelineChart).not.toBeInTheDocument();
    });
});
