import type {
    RootStoreType,
    ThemeEnum,
} from '@constants/interfaces/interfaces';

export const getThemeSelector = (state: RootStoreType): ThemeEnum =>
    state.app.currentTheme;
export const isModalOpenedSelector = (state: RootStoreType): boolean =>
    state.app.isModalOpened;
