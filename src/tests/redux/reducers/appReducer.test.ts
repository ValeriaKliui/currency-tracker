import { ThemeEnum } from '@constants/interfaces/interfaces';
import {
    closeModal,
    openModal,
    setIsFetching,
    setIsHintsOpened,
    setTheme,
} from '@store/actions/appActions';
import { appReducer } from '@store/reducers/app';

describe('app reducer', () => {
    it('should handle APP/SET_THEME', () => {
        const theme = ThemeEnum.light;
        const action = setTheme(theme);
        const newState = appReducer(undefined, action);
        expect(newState).toEqual({
            ...newState,
            currentTheme: ThemeEnum.light,
        });
    });

    it('should handle APP/SET_IS_FETCHING', () => {
        const isFetching = true;
        const action = setIsFetching(isFetching);
        const newState = appReducer(undefined, action);
        expect(newState).toEqual({
            ...newState,
            isFetching: true,
        });
    });

    it('should handle APP/SET_IS_HINTS_OPENED', () => {
        const isHintsOpened = true;
        const action = setIsHintsOpened(isHintsOpened);
        const newState = appReducer(undefined, action);
        expect(newState).toEqual({
            ...newState,
            isHintsOpened: true,
        });
    });

    it('should handle APP/OPEN_MODAL', () => {
        const action = openModal();
        const newState = appReducer(undefined, action);
        expect(newState).toEqual({
            ...newState,
            isModalOpened: true,
        });
    });

    it('should handle APP/CLOSE_MODAL', () => {
        const action = closeModal();
        const newState = appReducer(undefined, action);
        expect(newState).toEqual({
            ...newState,
            isModalOpened: false,
        });
    });
});
