import { type ChangeEvent, Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { CurrencyItem } from '@components/CurrencyItem';
import { Error } from '@components/Error';
import { Period } from '@components/Period';
import { Select } from '@components/Select';
import { ConcreteSubject, observer } from '@components/TimelineObserver';
import {
    CURRENCIES_HISTORY_AVAILABLE,
    TIMELINE_DURATION,
} from '@constants/constants/currencies';
import {
    type Currencies,
    type Currency,
    type TimelineBlockProps,
    type TimelineBlockState,
    type TimelineI,
} from '@constants/interfaces/interfaces';
import { getCache } from '@utils/cacheData';
import { configChart } from '@utils/configChart';
import { formatDate } from '@utils/formatDate';
import { getAvailableCurrencies } from '@utils/getAvailableCurrencies';
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

import 'chartjs-adapter-date-fns';

import {
    Container,
    CurrencyDetails,
    DateContainer,
    DateInput,
    DatesContainer,
    Periods,
} from './styled';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    TimeSeriesScale,
);

export class TimelineBlock extends Component<
    TimelineI,
    TimelineBlockState,
    TimelineBlockProps
> {
    prevMonth = new Date().setMonth(new Date().getMonth() - 1);
    subject = new ConcreteSubject(this.props.currencyTimelineData);

    constructor(props: TimelineI) {
        super(props);
        this.state = {
            historyDateStart: formatDate(this.prevMonth),
            historyDateEnd: formatDate(new Date()),
            duration: TIMELINE_DURATION.default,
            selectOptions: getAvailableCurrencies(
                this.props.currencies,
                (currency: Currency) =>
                    CURRENCIES_HISTORY_AVAILABLE.includes(currency.code),
            ),
        };
    }

    componentDidMount() {
        this.setCurrencyInit();
        this.subject.subscribe(observer);
    }

    componentDidUpdate(
        prevProps: TimelineBlockProps,
        prevState: TimelineBlockState,
    ) {
        if (
            prevProps.targetCurrencyCode !== this.props.targetCurrencyCode ||
            this.state.historyDateStart !== prevState.historyDateStart ||
            this.state.historyDateEnd !== prevState.historyDateEnd
        )
            this.fetchCurrencyHistory();

        if (prevState.duration !== this.state.duration) {
            this.setState((prevState) => ({
                ...prevState,
                duration: this.state.duration,
            }));
            if (this.state.duration === TIMELINE_DURATION.default) {
                this.setState({
                    historyDateStart: formatDate(this.prevMonth),
                    historyDateEnd: formatDate(new Date()),
                });
                this.props.currencyTimelineData.length !== 0 &&
                    this.subject.processData();
            }
        }

        if (
            this.props.currencyTimelineData.length !== 0 &&
            this.state.duration === TIMELINE_DURATION.default
        ) {
            this.subject.processData();
        }

        if (this.props.currencies?.meta !== prevProps?.currencies?.meta) {
            this.setState({
                selectOptions: getAvailableCurrencies(
                    this.props.currencies,
                    (currency: Currency) =>
                        CURRENCIES_HISTORY_AVAILABLE.includes(currency.code),
                ),
            });
        }
    }

    componentWillUnmount() {
        this.subject.unsubscribe(observer);
    }

    setCurrencyInit = () => {
        const { fetchCurrencyThunk, setCurrencies } = this.props;
        const cachedCurrencyData = getCache<Currencies>('currencyData');
        if (cachedCurrencyData !== null) setCurrencies(cachedCurrencyData);
        else fetchCurrencyThunk();
    };

    fetchCurrencyHistory = () => {
        this.props.targetCurrencyCode !== null &&
            this.props.fetchCurrencyTimelineThunk(
                this.props.targetCurrencyCode,
                this.state.historyDateStart,
                this.state.historyDateEnd,
            );
    };

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };

    render() {
        const { targetCurrencyCode, currencyTimelineData, error } = this.props;

        const { duration, historyDateStart, historyDateEnd, selectOptions } =
            this.state;
        const { data, options, plugins } = configChart(currencyTimelineData);
        const durations = Object.values(TIMELINE_DURATION);

        const isChartReady =
            this.props.currencyTimelineData !== null &&
            this.props.currencyTimelineData.length !== 0 &&
            this.props.targetCurrencyCode !== null;

        return (
            <Container>
                {error !== null && <Error text={error} />}
                <CurrencyDetails>
                    <Select
                        options={selectOptions}
                        testID="currency-selector"
                    />
                    <Periods>
                        <p>Choose duration:</p>
                        {durations.map((duration) => (
                            <Period
                                key={duration}
                                name="duration"
                                value={duration}
                                onChange={this.handleChange}
                                checked={this.state.duration === duration}
                                testID={duration}
                            />
                        ))}
                    </Periods>

                    {duration === TIMELINE_DURATION.period && (
                        <DatesContainer>
                            <DateContainer>
                                start date
                                <DateInput
                                    type="date"
                                    value={historyDateStart}
                                    name="historyDateStart"
                                    onChange={this.handleChange}
                                    data-cy="history-date-start"
                                />
                            </DateContainer>
                            <DateContainer>
                                end date
                                <DateInput
                                    type="date"
                                    value={historyDateEnd}
                                    name="historyDateEnd"
                                    onChange={this.handleChange}
                                    max={formatDate(new Date())}
                                    data-cy="history-date-end"
                                />
                            </DateContainer>
                        </DatesContainer>
                    )}
                    {targetCurrencyCode !== null && (
                        <CurrencyItem
                            currencyCode={targetCurrencyCode}
                            testID="target-currency"
                        />
                    )}
                </CurrencyDetails>
                {isChartReady && (
                    <Bar
                        data={data}
                        options={options}
                        plugins={plugins}
                        data-testid="timeline-chart"
                        data-cy="timeline-chart"
                    />
                )}
            </Container>
        );
    }
}
