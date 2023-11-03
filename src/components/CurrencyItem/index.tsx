import { type FC, memo } from 'react';
import { type CurrencyItemProps } from '@constants/interfaces/interfaces';

import { Container, CurrencyInfo, CurrencyName, CurrencySub } from './styled';

export const CurrencyItem: FC<CurrencyItemProps> = memo(
    ({ currencyName, value, icon, onClick, code }) => {
        const CurrencyIcon = icon;
        return (
            <Container onClick={onClick}>
                <CurrencyIcon />
                <CurrencyInfo>
                    <CurrencyName>{currencyName}</CurrencyName>
                    <CurrencySub>{value}</CurrencySub>
                    {code !== null && <CurrencySub>{code}</CurrencySub>}
                </CurrencyInfo>
            </Container>
        );
    },
);
