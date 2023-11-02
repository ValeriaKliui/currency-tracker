import type { ReactNode } from 'react';

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
