import type { ThemeEnum } from '@constants/interfaces/interfaces';
import {
    type closeModal,
    type openModal,
    type setIsFetching,
    type setIsHintsOpened,
    type setTheme,
} from '@store/actions/appActions';

export interface IAppState {
    currentTheme: ThemeEnum;
    isModalOpened: boolean;
    isHintsOpened: boolean;
    isFetching: boolean;
}
export type ActionsAppType =
    | ReturnType<typeof setTheme>
    | ReturnType<typeof openModal>
    | ReturnType<typeof setIsHintsOpened>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof closeModal>;
