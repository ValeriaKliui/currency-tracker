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

export type CurrencyCodeType = keyof typeof CurrenciesEnum;
export interface Currencies {
    meta: { last_updated_at: string };
    data: Record<string, Currency>;
}

export interface Currency {
    code: CurrencyCodeType;
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
    currencyName?: string;
    icon?: string;
    onClick?: () => void;
    currencyCode?: CurrencyCodeType;
    scalable?: boolean;
    subText?: string;
}
export interface ModalProps {
    children: ReactNode;
    onClose: () => void;
}
export interface SelectProps {
    options: Currency[];
}

export interface TimelineBlockProps {
    baseCurrencyCode: CurrencyCodeType | null;
    targetCurrencyCode: CurrencyCodeType | null;
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
    setCurrencies: (currencies: Currencies) => void;
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
    targetCurrencyCode: CurrencyCodeType | null;
    banksData: Bank[] | null;
}
export interface SearchBlockState {
    inputValueBankCard: string;
}
export interface SearchBlockDispatch {
    fetchCurrencyThunk: () => void;
    setTargetCurrency: (targetCurrencyCode: CurrencyCodeType | null) => void;
    setIsHintsOpened: (isHintsOpened: boolean) => void;
    setBanksData: (banksData: Bank[]) => void;
    setCurrencies: (currencies: Currencies) => void;
}
export interface BankCardI extends SearchBlockProps, SearchBlockDispatch {}
export interface HintsProps {
    options: Currency[];
    onOptionClick: (currencyCode: CurrencyCodeType) => void;
}
export enum BankOpened {
    'Opened' = 'VeryLikelyOpen',
    'Probably opened' = 'LikelyOpen',
    'Closed' = 'Unsure',
}
export interface Bank {
    fsq_id: string;
    closed_bucket: BankOpened;
    geocodes: {
        main: {
            latitude: number;
            longitude: number;
        };
    };
    link: string;
    location: {
        address: string;
        country: string;
        formatted_address: string;
        locality: string;
        region: string;
    };
    name: string;
}
export interface CardProps {
    banksData: Bank[] | null;
    targetCurrencyCode: CurrencyCodeType | null;
}
export interface CardDispatch {
    fetchBanksThunk: () => void;
}
export interface CardI extends CardProps, CardDispatch {}
export interface CardState {
    viewport: { latitude: number; longitude: number; zoom: number };
    selectedBankID: string | null;
}
export interface BanksData {
    results: Bank[];
}
export interface NavLinksProps {
    onClick?: () => void;
}
export interface PeriodProps {
    value: string;
    name: string;
    checked: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
