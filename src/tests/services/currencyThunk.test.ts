import * as actions from '@store/actions/timelineActions';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { timelineData } from '../mocks/mocks';

describe('currency thunk', () => {
    const middleware = [thunk];
    const mockStore = configureMockStore(middleware);
    const store = mockStore();
    const mock = new MockAdapter(axios);

    beforeEach(() => {
        store.clearActions();
    });

    it('dispatches FETCH_TIMELINE_HISTORY after a successfull API requets', () => {
        mock.onGet(`https://rest.coinapi.io/v1/ohlcv/`).reply(200, {
            response: timelineData,
        });
        store.dispatch(actions.fetchTimelineHistory(timelineData));
        const expectedActions = [
            {
                type: 'TIMELINE/FETCH_TIMELINE_HISTORY',
                payload: timelineData,
            },
        ];
        expect(store.getActions()).toEqual(expectedActions);
    });
});
