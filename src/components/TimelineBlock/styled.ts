import { wrapper } from '@constants/styles/global';
import { styled } from 'styled-components';

export const Container = styled.div`
    ${wrapper};
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-bottom: 3rem;
`;
export const CurrencyDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;
export const Periods = styled.div`
    display: flex;
    gap: 2rem;
    @media (max-width: ${({ theme }) => theme.devices.tablet}) {
        gap: 0.5rem;
    }
`;
export const PeriodLabel = styled.label<{ $isChoosen: boolean }>`
    cursor: pointer;
    border-bottom: ${({ $isChoosen, theme }) =>
        $isChoosen ? `1px solid ${theme.colors.fontActive}` : ''};
`;
export const PeriodType = styled.input`
    appearance: none;
    margin: 0;
`;
export const DatesContainer = styled.div`
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
`;
export const DateInput = styled.input`
    background-color: ${({ theme }) => theme.colors.backgroundItem};
    color: ${({ theme }) => theme.colors.font};
    color-scheme: dark;
    border: none;
    cursor: pointer;
`;
export const DateContainer = styled.label`
    display: flex;
    gap: 1rem;
`;
