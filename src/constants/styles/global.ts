import PoppinsRegular from '@assets/fonts/Poppins-Regular.woff';
import { createGlobalStyle, css } from 'styled-components';

import { scaleAnimation } from './animations';

export const wrapper = css`
    max-width: 1440px;
    padding: 30px 50px;
    margin: 0 auto;
    @media (max-width: ${({ theme }) => theme.devices.laptop}) {
        padding: 30px;
    }
`;
const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: url(${PoppinsRegular}) format('woff');
    }
    body {
        background-color: ${({ theme }) => theme.colors.background};
        font-family: ${({ theme }) => theme.fontFamilies[0]};
        color: ${({ theme }) => theme.colors.font};
        font-size: ${({ theme }) => theme.fontSizes.s};
        margin: 0;
        @media (max-width: ${({ theme }) => theme.devices.laptop}) {
            font-size: ${({ theme }) => theme.fontSizes.xxs};
        }
    }
    a {
        color: inherit;
        text-decoration: none;
        ${scaleAnimation}
        &:hover {
            color: ${({ theme }) => theme.colors.fontActive};
        }
    }
    li {
        list-style-type: none;
    }
    ul {
        padding: 0;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }
    .active {
        color: ${({ theme }) => theme.colors.fontActive};
    }
`;
