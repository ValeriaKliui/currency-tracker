import { type ChangeEvent, Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { CurrencyItem } from '@components/CurrencyItem';
import { Error } from '@components/Error';
import { Select } from '@components/Select';
import { ConcreteSubject, observer } from '@components/TimelineObserver';
import { CURRENCIES_HISTORY_AVAILABLE } from '@constants/constants/currencies';
import {
    type TimelineBlockProps,
    type TimelineBlockState,
    type TimelineI,
} from '@constants/interfaces/interfaces';
import { configChart } from '@utils/configChart';
import { formatDate } from '@utils/formatDate';
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
    PeriodLabel,
    Periods,
    PeriodType,
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
    prevMonth = new Date();
    subject = new ConcreteSubject(this.props.currencyTimelineData);

    constructor(props: TimelineI) {
        super(props);
        this.prevMonth.setMonth(this.prevMonth.getMonth() - 1);
        this.state = {
            historyDateStart: formatDate(this.prevMonth),
            historyDateEnd: formatDate(new Date()),
            duration: 'month',
        };
    }

    componentDidMount() {
        if (this.props.currencies === null) this.fetchCurrencyInit();
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
        }

        if (
            prevState.duration !== this.state.duration &&
            this.state.duration === 'month'
        ) {
            this.setState({
                historyDateStart: formatDate(this.prevMonth),
                historyDateEnd: formatDate(new Date()),
            });
        }

        if (
            this.props.currencyTimelineData.length !== 0 &&
            this.state.duration === 'month'
        ) {
            this.subject.processData();
        }
    }

    componentWillUnmount() {
        this.subject.unsubscribe(observer);
    }

    fetchCurrencyInit = () => {
        this.props.fetchCurrencyThunk();
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
        const { targetCurrencyCode, currencies, currencyTimelineData, error } =
            this.props;

        const { duration } = this.state;
        const { data, options, plugins } = configChart(currencyTimelineData);

        const selectOptions =
            currencies === null
                ? []
                : Object.values(currencies.data).filter((currency) =>
                      CURRENCIES_HISTORY_AVAILABLE.includes(currency.code),
                  );
        return (
            <Container>
                {error !== null && <Error text={error} />}
                <CurrencyDetails>
                    <Select options={selectOptions} />
                    <Periods>
                        <p>Choose duration:</p>
                        <PeriodLabel
                            $isChoosen={this.state.duration === 'month'}
                        >
                            month
                            <PeriodType
                                type="radio"
                                value="month"
                                name="duration"
                                checked={this.state.duration === 'month'}
                                onChange={this.handleChange}
                            />
                        </PeriodLabel>
                        <PeriodLabel
                            $isChoosen={this.state.duration === 'period'}
                        >
                            period
                            <PeriodType
                                type="radio"
                                value="period"
                                name="duration"
                                checked={this.state.duration === 'period'}
                                onChange={this.handleChange}
                            />
                        </PeriodLabel>
                    </Periods>

                    {duration === 'period' && (
                        <DatesContainer>
                            <DateContainer>
                                start date
                                <DateInput
                                    type="date"
                                    value={this.state.historyDateStart}
                                    name="historyDateStart"
                                    onChange={this.handleChange}
                                />
                            </DateContainer>
                            <DateContainer>
                                end date
                                <DateInput
                                    type="date"
                                    value={this.state.historyDateEnd}
                                    name="historyDateEnd"
                                    onChange={this.handleChange}
                                    max={formatDate(new Date())}
                                />
                            </DateContainer>
                        </DatesContainer>
                    )}
                    {targetCurrencyCode !== null && (
                        <CurrencyItem currencyCode={targetCurrencyCode} />
                    )}
                </CurrencyDetails>
                {currencyTimelineData !== null &&
                    currencyTimelineData.length !== 0 &&
                    targetCurrencyCode !== null && (
                        <Bar data={data} options={options} plugins={plugins} />
                    )}
            </Container>
        );
    }
}
