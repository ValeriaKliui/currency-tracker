import { ThemeEnum } from '@constants/interfaces/interfaces';
import {
    closeModal,
    openModal,
    setIsFetching,
    setIsHintsOpened,
    setTheme,
} from '@store/actions/appActions';

describe('setTheme', () => {
    test('should create an action to set the app theme', () => {
        const theme = ThemeEnum.light;
        const expectedAction = {
            type: 'APP/SET_THEME',
            payload: { theme },
        };

        expect(setTheme(theme)).toEqual(expectedAction);
    });
});

describe('setIsFetching', () => {
    test('should create an action to set the app fetching status', () => {
        const isFetching = true;
        const expectedAction = {
            type: 'APP/SET_IS_FETCHING',
            payload: isFetching,
        };

        expect(setIsFetching(isFetching)).toEqual(expectedAction);
    });
});

describe('setIsHintsOpened', () => {
    test('should create an action to set is hints opened status', () => {
        const isHintsOpened = true;
        const expectedAction = {
            type: 'APP/SET_IS_HINTS_OPENED',
            payload: isHintsOpened,
        };

        expect(setIsHintsOpened(isHintsOpened)).toEqual(expectedAction);
    });
});

describe('openModal', () => {
    test('should create an action to open modal', () => {
        const expectedAction = {
            type: 'APP/OPEN_MODAL',
            payload: true,
        };

        expect(openModal()).toEqual(expectedAction);
    });
});

describe('closeModal', () => {
    test('should create an action to close modal', () => {
        const expectedAction = {
            type: 'APP/CLOSE_MODAL',
            payload: false,
        };

        expect(closeModal()).toEqual(expectedAction);
    });
});
