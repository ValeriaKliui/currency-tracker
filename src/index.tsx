import { type FC, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from '@components/ErrorBoundary/ErrorBoundary';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Navbar } from '@components/Navbar';
import { Spinner } from '@components/Spinner';
import { NAVIGATION_ITEMS } from '@constants/constants/navigation';
import { GlobalStyle } from '@constants/styles/global';
import { useAppSelector } from '@hooks/store';
import { getIsFetching } from '@store/selectors/appSelector';
import { Theme } from '@utils/ThemeProvider';

import { store } from './store';
import { Error } from '@components/Error';

const BasicLayout: FC = () => {
    const isFetching = useAppSelector(getIsFetching);
    return (
        <ErrorBoundary>
            <Navbar />
            <Header />
            <Outlet />
            <Footer />
            {isFetching && <Spinner />}
        </ErrorBoundary>
    );
};

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
                <Suspense fallback={<Spinner />}>
                    <RouterProvider router={router} />
                </Suspense>
            </Theme>
        </Provider>
    </StrictMode>,
);
