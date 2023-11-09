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
    &::placeholder {
        color: ${({ theme }) => theme.colors.subText};
    }
`;
export const IconContainer = styled.div`
    position: absolute;
    top: 25%;
    right: 1rem;
`;
