import type { ThemeEnum } from '@constants/interfaces/interfaces';
import { type RootStoreType } from '@store/types/interfaces';

export const getThemeSelector = (state: RootStoreType): ThemeEnum =>
    state.app.currentTheme;
export const isModalOpenedSelector = (state: RootStoreType): boolean =>
    state.app.isModalOpened;
