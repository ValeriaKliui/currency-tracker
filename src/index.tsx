import { type FC, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import { Footer } from '@components/Footer';
import { NAVIGATION_ITEMS } from '@constants/constants/navigation';

const BasicLayout: FC = () => (
    <ErrorBoundary>
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
        <RouterProvider router={router} />
    </StrictMode>,
);
