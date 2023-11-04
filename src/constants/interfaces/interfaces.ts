import type { ReactNode } from 'react';
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

export interface Quotes {
    meta: { last_updated_at: string };
    data: Record<
        string,
        {
            code: keyof typeof CurrenciesEnum;
            value: number;
        }
    >;
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
}
export interface ModalProps {
    children: ReactNode;
    onClose: () => void;
}
export interface SelectProps {
    options: Currency[];
}
export interface Currency {
    code: keyof typeof CurrenciesEnum;
    value: number;
}
