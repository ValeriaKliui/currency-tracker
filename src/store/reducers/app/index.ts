import { ThemeEnum } from '@constants/interfaces/interfaces';

import type { ActionsAppType, IAppState } from './types';

const initialState: IAppState = {
    currentTheme: ThemeEnum.dark,
    isModalOpened: false,
};
export const appReducer = (
    state = initialState,
    action: ActionsAppType,
): IAppState => {
    switch (action.type) {
        case 'APP/SET_THEME': {
            return {
                ...state,
                currentTheme: action.payload.theme,
            };
        }
        case 'APP/OPEN_MODAL': {
            return {
                ...state,
                isModalOpened: true,
            };
        }
        case 'APP/CLOSE_MODAL': {
            return {
                ...state,
                isModalOpened: false,
            };
        }
        default:
            return state;
    }
};
