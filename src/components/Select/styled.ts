import Arrow from '@assets/img/arrow.png';
import { styled } from 'styled-components';

export const SelectContainer = styled.div`
    position: relative;
    cursor: pointer;
    max-width: 20rem;
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
        right: 10%;
        transform: ${({ theme, $isOpen }) => ($isOpen ? 'rotate(180deg)' : '')};
    }
`;
export const OptionsContainer = styled.div`
    position: absolute;
    background-color: ${({ theme }) => theme.colors.backgroundItem};
    overflow-y: scroll;
    max-height: 15rem;
    width: 100%;
`;
export const Option = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 0.5rem;
`;
