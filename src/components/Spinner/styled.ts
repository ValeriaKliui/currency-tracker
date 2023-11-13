import { spin } from '@constants/styles/animations';
import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`;
export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.backgroundTransparent};
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const SpinnerStyled = styled.div`
    border: 18px solid ${({ theme }) => theme.colors.border};
    border-top: 18px ${({ theme }) => theme.colors.fontActive} solid;
    border-radius: 50%;
    height: 70px;
    width: 70px;
    animation: ${spin} 2s linear infinite;
`;
