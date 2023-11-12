import { transitionAnimation } from '@constants/styles/animations';
import styled from 'styled-components';

export const OptionsContainer = styled.div<{ $isShowing?: boolean }>`
    position: absolute;
    background-color: ${({ theme }) => theme.colors.backgroundItem};
    overflow-y: scroll;
    max-height: 12rem;
    width: 100%;
    z-index: 100;

    ${transitionAnimation}
    opacity: 0;
    pointer-events: none;

    ${({ $isShowing }) =>
        ($isShowing ?? false) &&
        `
    pointer-events: auto;
    opacity: 1;
  `}
`;
export const Option = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 0.5rem;
`;
