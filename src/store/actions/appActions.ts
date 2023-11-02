import type {
    CurrenciesEnum,
    ThemeEnum,
} from '@constants/interfaces/interfaces';

export const setTheme = (theme: ThemeEnum) => {
    return {
        type: 'APP/SET_THEME',
        payload: {
            theme,
        },
    } as const;
};
export const openModal = () => {
    return {
        type: 'APP/OPEN_MODAL',
        payload: {
            isModalOpened: true,
        },
    } as const;
};
