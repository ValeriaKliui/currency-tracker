import { wrapper } from '@constants/styles/global';
import styled from 'styled-components';

export const Wrapper = styled.div`
    ${wrapper};
    display: flex;
    flex-direction: column;
    gap: 4rem;
    @media (max-width: ${(props) => props.theme.devices.mobile}) {
        gap: 2rem;
    }
`;

export const Title = styled.p`
    font-size: ${(props) => props.theme.fontSizes.m};
`;
export const CurrenciesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3em 5em;
    @media (max-width: ${(props) => props.theme.devices.laptop}) {
        gap: 2em 3em;
        grid-template-columns: repeat(1, 1fr);
    }
`;
export const Hr = styled.hr`
    border: none;
    border-top: 2px solid ${(props) => props.theme.colors.border};
    margin: 20px 0;
`;
export const EmptyCell = styled.div`
    @media (max-width: ${(props) => props.theme.devices.tablet}) {
        display: none;
    }
`;
