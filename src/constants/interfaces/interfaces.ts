import type { FC, ReactNode, SVGProps } from 'react';
import { type rootReducer } from '@store/index';

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
export type RootStoreType = ReturnType<typeof rootReducer>;

export interface IQuotes {
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
export interface IStock extends ICurrencyItemProps {}
export interface ICurrencyItemProps {
    currencyName: string;
    value?: string;
    icon: FC<SVGProps<SVGElement>>;
    onClick?: () => void;
    code?: keyof typeof CurrenciesEnum;
}
