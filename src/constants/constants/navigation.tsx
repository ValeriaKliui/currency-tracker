import { lazy } from 'react';

const Home = lazy(
    async () =>
        await import('@pages/Home').then(({ Home }) => ({ default: Home })),
);

const Timeline = lazy(async () => await import('@pages/Timeline'));

const BankCard = lazy(
    async () =>
        await import('@pages/BankCard').then(({ BankCard }) => ({
            default: BankCard,
        })),
);

export const NAVIGATION_ITEMS = [
    {
        path: '/',
        element: <Home />,
        navTitle: 'Home',
    },
    {
        path: '/timeline',
        element: <Timeline />,
        navTitle: 'Timeline',
    },
    {
        path: '/bank-card',
        element: <BankCard />,
        navTitle: 'Bank card',
    },
];
export const FOOTER_INFO = {
    sections: [
        {
            sectionTitle: 'General',
            sectionLinks: [
                { linkTitle: 'Market', linkHref: '' },
                { linkTitle: 'Service', linkHref: '' },
            ],
        },
        {
            sectionTitle: 'Product',
            sectionLinks: [
                { linkTitle: 'Sparks', linkHref: '' },
                { linkTitle: 'Snaps', linkHref: '' },
            ],
        },
        {
            sectionTitle: 'Community',
            sectionLinks: [
                { linkTitle: 'Ideas', linkHref: '' },
                { linkTitle: 'Streams', linkHref: '' },
            ],
        },
    ],
};
