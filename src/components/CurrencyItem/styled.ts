import { scaleAnimation } from '@constants/styles/animations';
import styled from 'styled-components';

export const Container = styled.div`
    padding: 2rem;
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: ${(props) => props.theme.radiuses.items};
    background-color: ${(props) => props.theme.colors.backgroundItem};
    display: flex;
    align-items: center;
    gap: 2rem;
    cursor: pointer;
    ${scaleAnimation}
`;
export const CurrencyInfo = styled.div`
    display: flex;
    flex-direction: column;
`;
export const CurrencyName = styled.h3`
    font-size: ${(props) => props.theme.fontSizes.l};
    font-weight: 400;
`;
export const CurrencySub = styled.p`
    font-size: ${(props) => props.theme.fontSizes.m};
    color: ${(props) => props.theme.colors.subText};
`;
