import { styled } from 'styled-components';

export const InputContainer = styled.div`
    position: relative;
    display: flex;
`;
export const InputStyled = styled.input`
    background-color: ${({ theme }) => theme.colors.backgroundItem};
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 1rem 2rem;
    font-size: ${({ theme }) => theme.fontSizes.s};
    color: ${({ theme }) => theme.colors.font};
    width: 100%;
    &::placeholder {
        color: ${({ theme }) => theme.colors.subText};
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;
export const IconContainer = styled.div`
    position: absolute;
    top: 25%;
    right: 1rem;
`;
