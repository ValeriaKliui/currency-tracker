import type { ChangeEvent, ReactNode } from 'react';
export interface ErrorBoundaryProps {
    children?: ReactNode;
}
export interface ErrorBoundaryState {
    hasError: boolean;
    errorInfo: string | '';
}
export interface ErrorProps {
    text?: string;
}
export enum ThemeEnum {
    light = 'light',
    dark = 'dark',
}
export interface Theme {
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
        xxs: string;
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
    devices: {
        mobile: string;
        tablet: string;
        laptop: string;
        bigScreen: string;
    };
}

export interface Currencies {
    meta: { last_updated_at: string };
    data: Record<string, Currency>;
}

export interface Currency {
    code: keyof typeof CurrenciesEnum;
    value: number;
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
export interface CurrencyItemProps {
    currencyName: string;
    value?: string;
    icon: string;
    onClick?: () => void;
    code?: keyof typeof CurrenciesEnum;
    scalable?: boolean;
    hoverable?: boolean;
}
export interface ModalProps {
    children: ReactNode;
    onClose: () => void;
}
export interface SelectProps {
    options: Currency[];
}

export interface TimelineBlockProps {
    baseCurrencyCode: keyof typeof CurrenciesEnum | null;
    targetCurrencyCode: keyof typeof CurrenciesEnum | null;
    currencies: Currencies | null;
    currencyTimelineData: TimelineDayData[];
    error: string | null;
}
export interface TimelineDispatch {
    fetchCurrencyThunk: () => void;
    fetchCurrencyTimelineThunk: (
        targetCurrencyCode: string,
        historyDateStart: string,
        historyDateEnd: string,
    ) => void;
}
export interface TimelineI extends TimelineBlockProps, TimelineDispatch {}
export interface TimelineBlockState {
    historyDateStart: string;
    historyDateEnd: string;
    duration: string;
}
export interface TimelineDayData {
    price_close: number;
    price_high: number;
    price_low: number;
    price_open: number;
    time_close: string;
    time_open: string;
    time_period_end: string;
    time_period_start: string;
    trades_count: number;
    volume_traded: number;
}
export interface InputProps {
    placeholder?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}
export interface SearchBlockProps {
    currencies: Currencies | null;
}
export interface SearchBlockState {
    inputValueBankCard: string;
}
export interface SearchBlockDispatch {
    fetchCurrencyThunk: () => void;
}
export interface BankCardI extends SearchBlockProps, SearchBlockDispatch {}
export interface HintsProps {
    options: Currency[];
    onOptionClick: (currencyCode: keyof typeof CurrenciesEnum) => void;
}
