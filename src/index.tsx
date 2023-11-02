import { type FC, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from '@components/ErrorBoundary/ErrorBoundary';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Navbar } from '@components/Navbar';
import { NAVIGATION_ITEMS } from '@constants/constants/navigation';
import { GlobalStyle } from '@constants/styles/global';
import { Theme } from '@utils/ThemeProvider';

import { store } from './store';

const BasicLayout: FC = () => (
    <ErrorBoundary>
        <Navbar />
        <Header />
        <Outlet />
        <Footer />
    </ErrorBoundary>
);

const router = createHashRouter([
    {
        element: <BasicLayout />,
        children: NAVIGATION_ITEMS,
    },
]);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element);
root.render(
    <StrictMode>
        <Provider store={store}>
            <Theme>
                <GlobalStyle />
                <RouterProvider router={router} />
            </Theme>
        </Provider>
    </StrictMode>,
);
