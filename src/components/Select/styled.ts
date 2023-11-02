import { styled } from 'styled-components';

export const SelectContainer = styled.div`
    position: relative;
    cursor: pointer;
    width: 20rem;
`;
export const ChoosenOption = styled.div`
    background-color: ${(props) => props.theme.colors.backgroundItem};
    border: 1px solid ${(props) => props.theme.colors.border};
    padding: 1rem;
    height: 2rem;
    border-radius: ${(props) => props.theme.radiuses.items};
`;
export const OptionsContainer = styled.div`
    border: 1px solid ${(props) => props.theme.colors.border};
    position: absolute;
    background-color: ${(props) => props.theme.colors.backgroundItem};
    overflow-y: scroll;
    max-height: 15rem;
    width: 20rem;
`;
export const Option = styled.div`
    border: 1px solid ${(props) => props.theme.colors.border};
    padding: 0.5rem;
`;
