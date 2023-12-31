import { type ReactNode } from 'react';
import { darkTheme, lightTheme } from '@constants/styles/theme';
import { useAppSelector } from '@hooks/store';
import { getThemeSelector } from '@store/selectors/appSelector';
import { ThemeProvider } from 'styled-components';

export const Theme = ({ children }: { children: ReactNode }): JSX.Element => {
    const theme = useAppSelector(getThemeSelector);
    const currentTheme = theme === darkTheme.type ? darkTheme : lightTheme;

    return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};
