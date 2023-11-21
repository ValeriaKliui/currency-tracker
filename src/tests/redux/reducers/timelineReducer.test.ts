import { fetchTimelineHistory } from '@store/actions/timelineActions';
import { timelineReducer } from '@store/reducers/timeline';

import { timelineData } from '../../mocks/mocks';

describe('timeline reducer', () => {
    it('should handle TIMELINE/FETCH_TIMELINE_HISTORY', () => {
        const action = fetchTimelineHistory(timelineData);
        const newState = timelineReducer(undefined, action);
        expect(newState).toEqual({
            ...newState,
            currencyTimelineData: timelineData,
        });
    });
});
