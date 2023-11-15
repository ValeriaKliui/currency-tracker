import { type FC, useEffect } from 'react';
import { ThemeEnum } from '@constants/interfaces/interfaces';
import { useAppDispatch, useAppSelector } from '@hooks/store';
import { setTheme } from '@store/actions/appActions';
import { getThemeSelector } from '@store/selectors/appSelector';
import { getCache, setCache } from '@utils/cacheData';

import {
    TogglerButton,
    TogglerContainer,
    TogglerInput,
    TogglerLabel,
} from './styled';

export const ThemeToggler: FC = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector(getThemeSelector);

    const onChange = (): void => {
        const choosenTheme =
            theme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light;
        dispatch(setTheme(choosenTheme));
        setCache('theme', choosenTheme);
    };

    useEffect(() => {
        const savedTheme = getCache<ThemeEnum>('theme');
        savedTheme !== null && dispatch(setTheme(savedTheme));
    }, []);

    return (
        <TogglerContainer>
            <TogglerInput
                type="checkbox"
                onChange={onChange}
                id={theme}
                checked={theme === ThemeEnum.dark}
                data-testid="theme-checkbox"
            />
            <TogglerLabel htmlFor={theme}>
                <TogglerButton />
            </TogglerLabel>
        </TogglerContainer>
    );
};
