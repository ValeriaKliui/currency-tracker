import { css, keyframes } from 'styled-components';
const styled = { keyframes };

export const pulse = styled.keyframes`
    0% {
        transform: scale(0.95);
    }
    70% {
        transform: scale(1.02);
    }
    100% {
        transform: scale(0.95);
    }
`;
export const scaleAnimation = css`
    transition: 0.1s ease-in all;
    @media (pointer: fine) {
        &:hover {
            transform: scale(1.05);
        }
    }
`;
export const transitionAnimation = css`
    transition: 0.2s ease all;
`;
