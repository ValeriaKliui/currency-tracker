import { wrapper } from '@constants/styles/global';
import styled from 'styled-components';

export const Wrapper = styled.div`
    ${wrapper};
    display: flex;
    flex-direction: column;
    gap: 4rem;
`;

export const Title = styled.p`
    font-size: ${(props) => props.theme.fontSizes.m};
`;
export const CurrenciesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3em 7em;
`;
export const Hr = styled.hr`
    border: none;
    border-top: 2px solid ${(props) => props.theme.colors.border};
    margin: 20px 0;
`;
export const EmptyCell = styled.div``;
