import { Provider } from 'react-redux';
import { store } from '@store/index';
import { fireEvent, render } from '@testing-library/react';
import { Theme } from '@utils/ThemeProvider';

import { ThemeToggler } from '.';

describe('theme toggler', () => {
    test('should be rendered on the page', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <Theme>
                    <ThemeToggler />
                </Theme>
            </Provider>,
        );
        const toggler = getByTestId('theme-toggler');
        expect(toggler).toBeInTheDocument();
    });

    test('should toggle the theme checkbox checked value and id', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <Theme>
                    <ThemeToggler />
                </Theme>
            </Provider>,
        );
        const togglerCheckbox = getByTestId('theme-checkbox');
        expect(togglerCheckbox.id).toBe('dark');
        expect(togglerCheckbox).toBeChecked();

        fireEvent.click(togglerCheckbox);
        expect(togglerCheckbox.id).toBe('light');
        expect(togglerCheckbox).not.toBeChecked();
    });
});
