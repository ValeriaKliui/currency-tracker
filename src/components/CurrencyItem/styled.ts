import { scaleAnimation } from '@constants/styles/animations';
import styled from 'styled-components';

export const Container = styled.div<{ $plain: boolean }>`
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radiuses.items};
    background-color: ${({ $plain, theme }) =>
        $plain ? 'transparent' : theme.colors.backgroundItem};
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: ${({ $plain }) => ($plain ? 'auto' : 'pointer')};
    ${({ $plain }) => !$plain && scaleAnimation};
`;
export const CurrencyInfo = styled.div`
    display: flex;
    flex-direction: column;
`;
export const CurrencyName = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-weight: 400;
    @media (max-width: ${({ theme }) => theme.devices.laptop}) {
        font-size: ${({ theme }) => theme.fontSizes.xs};
    }
`;
export const CurrencySubText = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.s};
    color: ${({ theme }) => theme.colors.subText};
    @media (max-width: ${({ theme }) => theme.devices.laptop}) {
        font-size: ${({ theme }) => theme.fontSizes.xxs};
    }
`;
export const CurrencyIcon = styled.img`
    @media (max-width: ${({ theme }) => theme.devices.laptop}) {
        width: 70px;
    }
`;
