import Arrow from '@assets/img/arrow.png';
import { styled } from 'styled-components';

export const SelectContainer = styled.div`
    position: relative;
    cursor: pointer;
    max-width: 30rem;
`;
export const ChoosenOption = styled.div<{ $isOpen: boolean }>`
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.backgroundItem};
    padding: 1rem;
    height: 2rem;
    border-radius: ${({ theme }) => theme.radiuses.items};
    display: flex;
    align-items: center;
    &:after {
        content: url(${Arrow});
        position: absolute;
        right: 1rem;
        transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : '')};
    }
`;
