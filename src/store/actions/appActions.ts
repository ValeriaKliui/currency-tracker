import type { ThemeEnum } from '@constants/interfaces/interfaces';

export const setTheme = (theme: ThemeEnum) => {
    return {
        type: 'APP/SET_THEME',
        payload: {
            theme,
        },
    } as const;
};
export const setIsFetching = (isFetching: boolean) => {
    return {
        type: 'APP/SET_IS_FETCHING',
        payload: isFetching,
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
export const closeModal = () => {
    return {
        type: 'APP/CLOSE_MODAL',
        payload: {
            isModalOpened: false,
        },
    } as const;
};
export const setIsHintsOpened = (isHintsOpened: boolean) => {
    return {
        type: 'APP/SET_IS_HINTS_OPENED',
        payload: isHintsOpened,
    } as const;
};
