import { type DefaultTheme } from 'styled-components';

import { type Theme, ThemeEnum } from '../interfaces/interfaces';

export const colors = {
    black: 'rgb(3, 3, 4)',
    transparentBlack: 'rgba(3, 3, 4, 0.9)',
    white: 'rgb(255, 255, 255)',
    transparentWhite: 'rgba(255, 255, 255, 0.9)',
    gray: 'rgb(71,71,71)',
    grayDark: 'rgb(32,32,37)',
    grayLight: 'rgb(167,178,195)',
    greenBright: 'rgba(22,199,130)',
    greenDark: 'rgba(36,121,64,0)',
    greenLight: 'rgba(0,206,44,0.3',
    neon: 'rgba(0,206,44)',
    red: 'rgb(234,57,67)',
};

export const baseTheme: Theme = {
    colors: {
        ...colors,
        background: colors.black,
        backgroundTransparent: colors.transparentBlack,
        font: colors.white,
        fontActive: colors.neon,
        border: colors.gray,
        backgroundItem: colors.grayDark,
        subText: colors.grayLight,
        gradientCircle: colors.greenLight,
        gradientBg: colors.greenDark,
    },
    fontFamilies: ['Poppins'],
    fontSizes: {
        xxs: '16px',
        xs: '20px',
        s: '24px',
        m: '32px',
        l: '35px',
        xl: '45px',
        '2xl': '80px',
        '3xl': '90px',
    },
    radiuses: {
        togglerButton: '45px',
        togglerLabel: '100px',
        items: '8px',
    },
    devices: {
        mobile: '495px',
        tablet: '768px',
        laptop: '1024px',
        bigScreen: '1920px',
    },
};
export const lightTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.light,
    colors: {
        ...baseTheme.colors,
        background: colors.white,
        backgroundTransparent: colors.transparentWhite,
        font: colors.grayDark,
        backgroundItem: colors.grayLight,
        subText: colors.grayDark,
        border: colors.grayLight,
    },
};
export const darkTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.dark,
};
