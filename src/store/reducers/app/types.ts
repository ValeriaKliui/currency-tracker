import type { ThemeEnum } from '@constants/interfaces/interfaces';
import { type closeModal, type openModal, type setTheme } from '@store/actions/appActions';

export interface IAppState {
    currentTheme: ThemeEnum;
    isModalOpened: boolean;
}
export type ActionsAppType =
    | ReturnType<typeof setTheme>
    | ReturnType<typeof openModal>
    | ReturnType<typeof closeModal>;
