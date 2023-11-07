import { Component } from 'react';
import { connect } from 'react-redux';
import { TimelineBlock } from '@components/TimelineBlock';
import {
    type TimelineBlockProps,
    type TimelineDispatch,
    type TimelineI,
} from '@constants/interfaces/interfaces';
import { fetchCurrencyThunk } from '@store/services/currencyThunk';
import { fetchCurrencyTimelineThunk } from '@store/services/timelineThunk';
import { type RootStoreType } from '@store/types/interfaces';

export class Timeline extends Component<TimelineI> {
    render() {
        return <TimelineBlock {...this.props} />;
    }
}

const mapStateToProps = (state: RootStoreType): TimelineBlockProps => {
    return {
        baseCurrencyCode: state.currencies.baseCurrencyCode,
        targetCurrencyCode: state.currencies.targetCurrencyCode,
        currencies: state.currencies.currencies,
        currencyTimelineData: state.timeline.currencyTimelineData,
        error: state.currencies.error,
    };
};

const mapDispatchToProps: TimelineDispatch = {
    fetchCurrencyThunk,
    fetchCurrencyTimelineThunk,
};
export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
