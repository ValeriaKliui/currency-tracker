import type { ThemeEnum } from '@constants/interfaces/interfaces';

export const setTheme = (theme: ThemeEnum) => {
    return {
        type: 'APP/SET_THEME',
        payload: {
            theme,
        },
    } as const;
};
