import { transitionAnimation } from '@constants/styles/animations';
import { styled } from 'styled-components';

export const PeriodLabel = styled.label<{ $isChoosen: boolean }>`
    ${transitionAnimation}
    cursor: pointer;
    border-bottom: ${({ $isChoosen, theme }) =>
        $isChoosen ? `1px solid ${theme.colors.fontActive}` : ''};
`;
export const PeriodType = styled.input`
    appearance: none;
    margin: 0;
`;
