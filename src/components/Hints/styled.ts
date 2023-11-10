import styled from 'styled-components';

export const OptionsContainer = styled.div`
    position: absolute;
    background-color: ${({ theme }) => theme.colors.backgroundItem};
    overflow-y: scroll;
    max-height: 12rem;
    width: 100%;
    z-index: 100;
`;
export const Option = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 0.5rem;
`;
