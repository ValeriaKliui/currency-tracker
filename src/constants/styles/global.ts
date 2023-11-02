import { css, createGlobalStyle } from 'styled-components';
import PoppinsRegular from '@assets/fonts/Poppins-Regular.woff';
import { scaleAnimation } from './animations';

export const wrapper = css`
    max-width: 1440px;
    padding: 30px 50px;
    margin: 0 auto;
`;
const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: url(${PoppinsRegular}) format('woff');
    }
    body {
        background-color: ${(props) => props.theme.colors.background};
        font-family: ${(props) => props.theme.fontFamilies[0]};
        color: ${(props) => props.theme.colors.font};
        font-size: ${(props) => props.theme.fontSizes.s};
        margin: 0;
    }
    a {
        color: inherit;
        text-decoration: none;
        ${scaleAnimation}
        &:hover {
            color: ${(props) => props.theme.colors.fontActive};
        }
    }
    li {
        list-style-type: none;
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
    p {
        line-height: 3rem;
    }
    .active {
        color: ${(props) => props.theme.colors.fontActive};
    }
`;
