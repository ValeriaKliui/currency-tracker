import { type ChangeEvent, Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { CurrencyItem } from '@components/CurrencyItem';
import { Select } from '@components/Select';
import {
    ConcreteSubject,
    TimelineObserver,
} from '@components/TimelineObserver';
import {
    CURRENCIES_HISTORY_AVAILABLE,
    CURRENCIES_LOGOS,
} from '@constants/constants/currencies';
import {
    CurrenciesEnum,
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
    CurrencyDetails,
    DateContainer,
    DateInput,
    DatesContainer,
    PeriodLabel,
    Periods,
    PeriodType,
    Wrapper,
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
        const subject = new ConcreteSubject(this.props.currencyTimelineData);
        const observer = new TimelineObserver();
        subject.subscribe(observer);
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
        // if (
        //     this.props.currencyTimelineData.length !== 0 &&
        //     this.state.duration === 'month'
        // )
        //     subject.processData();
    }

    // componentWillUnmount() {
    //     const subject = new ConcreteSubject(this.props.currencyTimelineData);
    //     const observer = new TimelineObserver();
    //     subject.unsubscribe(observer);
    // }

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
        const { targetCurrencyCode, currencies, currencyTimelineData } =
            this.props;

        const { duration } = this.state;
        const { data, options, plugins } = configChart(currencyTimelineData);

        const selectOptions =
            currencies === null
                ? []
                : Object.values(currencies.data).filter((curr) =>
                      CURRENCIES_HISTORY_AVAILABLE.includes(curr.code),
                  );

        return (
            <Wrapper>
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
                        <CurrencyItem
                            currencyName={CurrenciesEnum[targetCurrencyCode]}
                            icon={
                                CURRENCIES_LOGOS[
                                    CurrenciesEnum[targetCurrencyCode]
                                ]
                            }
                            code={targetCurrencyCode}
                            plain={true}
                        />
                    )}
                </CurrencyDetails>
                {currencyTimelineData !== null &&
                    currencyTimelineData.length !== 0 && (
                        <Bar data={data} options={options} plugins={plugins} />
                    )}
            </Wrapper>
        );
    }
}
