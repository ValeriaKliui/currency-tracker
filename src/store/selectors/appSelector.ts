import type { ThemeEnum } from '@constants/interfaces/interfaces';
import { type RootStoreType } from '@store/types/interfaces';

export const getThemeSelector = (state: RootStoreType): ThemeEnum =>
    state.app.currentTheme;
export const getIsModalOpenedSelector = (state: RootStoreType): boolean =>
    state.app.isModalOpened;
export const getIsHintsOpened = (state: RootStoreType): boolean =>
    state.app.isHintsOpened;
export const getIsFetching = (state: RootStoreType): boolean =>
    state.app.isFetching;
