import type { ThemeEnum } from '@constants/interfaces/interfaces';
import { type setTheme } from '@store/actions/appActions';

export interface IAppState {
    currentTheme: ThemeEnum;
}
export type ActionsAppType = ReturnType<typeof setTheme>;
