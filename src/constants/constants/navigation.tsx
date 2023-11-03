import { Home } from '@pages/Home';

export const NAVIGATION_ITEMS = [
    {
        path: '/',
        element: <Home />,
        navTitle: 'Home',
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
