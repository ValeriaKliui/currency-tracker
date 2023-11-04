import { scaleAnimation } from '@constants/styles/animations';
import styled from 'styled-components';

export const Container = styled.div`
    padding: 1rem;
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: ${(props) => props.theme.radiuses.items};
    background-color: ${(props) => props.theme.colors.backgroundItem};
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    ${scaleAnimation}
`;
export const CurrencyInfo = styled.div`
    display: flex;
    flex-direction: column;
`;
export const CurrencyName = styled.h3`
    font-size: ${(props) => props.theme.fontSizes.s};
    font-weight: 400;
    @media (max-width: ${(props) => props.theme.devices.laptop}) {
        font-size: ${(props) => props.theme.fontSizes.xs};
    }
`;
export const CurrencySubText = styled.p`
    font-size: ${(props) => props.theme.fontSizes.s};
    color: ${(props) => props.theme.colors.subText};
    @media (max-width: ${(props) => props.theme.devices.laptop}) {
        font-size: ${(props) => props.theme.fontSizes.xxs};
    }
`;
export const CurrencyIcon = styled.img`
    @media (max-width: ${(props) => props.theme.devices.laptop}) {
        width: 70px;
    }
`;
