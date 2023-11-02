import { ThemeEnum } from '@constants/interfaces/interfaces';

import type { ActionsAppType, IAppState } from './types';

const initialState: IAppState = {
    currentTheme: ThemeEnum.dark,
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
        default:
            return state;
    }
};
