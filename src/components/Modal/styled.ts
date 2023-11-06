import { transitionAnimation } from '@constants/styles/animations';
import styled from 'styled-components';

export const ModalStyled = styled.div<{ $opened: boolean }>`
    ${transitionAnimation}
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: 0;
    pointer-events: none;
    z-index: -1;

    ${({ $opened }) =>
        ($opened ?? false) &&
        `
    pointer-events: auto;
    opacity: 1;
    z-index: 200;
  `}
`;
export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.backgroundTransparent};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
export const Content = styled.div`
    width: 70vw;
    min-height: 10vw;
    background-color: ${({ theme }) => theme.colors.backgroundItem};
    border-radius: ${({ theme }) => theme.radiuses.items};
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: auto;
`;
