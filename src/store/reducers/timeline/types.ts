import { type TimelineDayData } from '@constants/interfaces/interfaces';
import { type fetchTimelineHistory } from '@store/actions/timelineActions';

export interface TimelineState {
    currencyTimelineData: TimelineDayData[];
}
export type TimelineActions = ReturnType<typeof fetchTimelineHistory>;
