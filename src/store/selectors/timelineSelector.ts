import { type TimelineDayData } from '@constants/interfaces/interfaces';
import { type RootStoreType } from '@store/types/interfaces';

export const getTimelineDataSelector = (
    state: RootStoreType,
): TimelineDayData[] => state.timeline.currencyTimelineData;
