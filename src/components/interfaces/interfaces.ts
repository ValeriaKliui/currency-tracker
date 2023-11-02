import type { FC, ReactNode, SVGProps } from 'react';
import {
    type ICurrency,
    type IQuotes,
    type ITimelineDayData,
} from '@store/reducers/currencies/types';
import { type ChartData } from 'chart.js';

export interface IErrorBoundaryProps {
    children?: ReactNode;
}

export interface IErrorBoundaryState {
    hasError: boolean;
    errorInfo: string | '';
}
export interface IErrorProps {
    text?: string;
}

export enum ThemeEnum {
    light = 'light',
    dark = 'dark',
}

export interface ITheme {
    colors: {
        background: string;
        backgroundTransparent: string;
        font: string;
        fontActive: string;
        border: string;
        backgroundItem: string;
        subText: string;
        gradientCircle: string;
        gradientBg: string;
    };
    fontFamilies: [string];
    fontSizes: {
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
        '2xl': string;
        '3xl': string;
    };
    radiuses: {
        items: string;
        togglerButton: string;
        togglerLabel: string;
    };
}

export enum CurrenciesEnum {
    USD = 'Commercial Dollar',
    CAD = 'Canadian Dollar',
    AUD = 'Australian Dollar',
    EUR = 'Euro',
    ARS = 'Argentine Peso',
    JPY = 'Yen',
    CNY = 'Yuan',
    BTC = 'Bitcoin',
    LTC = 'Litecoin',
}

export interface ICurrencyItemProps {
    currencyName: string;
    value?: string;
    icon: FC<SVGProps<SVGElement>>;
    onClick?: () => void;
    code?: keyof typeof CurrenciesEnum;
}
export interface IStock extends ICurrencyItemProps {}

export interface IModalProps {
    children: ReactNode;
    closeModalActions: () => void;
}

export interface ITimeLine extends IMapDispatchToProps, IMapStateToProps {}
export interface IMapStateToProps {
    baseCurrency: keyof typeof CurrenciesEnum | null;
    targetCurrency: keyof typeof CurrenciesEnum | null;
    quotes: IQuotes | null;
    timelineData: ITimelineDayData[];
}

export interface IMapDispatchToProps {
    fetchCurrencyThunk: () => void;
    fetchCurrencyTimeLineThunk: (
        targetCurrency: keyof typeof CurrenciesEnum,
    ) => void;
}
export interface ITimeLineState {
    errorCurrency: string | null;
}
export interface ISelectProps {
    options: ICurrency[];
}
export interface ITimelineBlockProps {
    timelineData: ITimelineDayData[];
}
export interface ITimeLineChart extends ITimelineBlockProps {}
export interface ITimeLineChartState {
    labels: string[];
    datasets: ChartData<'bar'>;
}
