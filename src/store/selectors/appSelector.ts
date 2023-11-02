import type {
    RootStoreType,
    ThemeEnum,
} from '@constants/interfaces/interfaces';

export const getThemeSelector = (state: RootStoreType): ThemeEnum =>
    state.app.currentTheme;
