import { type TimelineDayData } from '@constants/interfaces/interfaces';

export const fetchTimelineHistory = (timelineHistory: TimelineDayData[]) => {
    return {
        type: 'TIMELINE/FETCH_TIMELINE_HISTORY',
        payload: timelineHistory,
    } as const;
};
