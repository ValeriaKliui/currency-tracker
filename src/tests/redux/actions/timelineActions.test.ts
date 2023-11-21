import { fetchTimelineHistory } from '@store/actions/timelineActions';

import { timelineData } from '../../mocks/mocks';

describe('fetchTimelineHistory', () => {
    test('should create an action to fetch timeline history', () => {
        const expectedAction = {
            type: 'TIMELINE/FETCH_TIMELINE_HISTORY',
            payload: timelineData,
        };

        expect(fetchTimelineHistory(timelineData)).toEqual(expectedAction);
    });
});
