import { type TimelineActions, type TimelineState } from './types';

const initialState: TimelineState = {
    currencyTimelineData: [],
};
export const timelineReducer = (
    state = initialState,
    action: TimelineActions,
): TimelineState => {
    switch (action.type) {
        case 'TIMELINE/FETCH_TIMELINE_HISTORY': {
            return {
                ...state,
                currencyTimelineData: action.payload,
            };
        }
        default:
            return state;
    }
};
