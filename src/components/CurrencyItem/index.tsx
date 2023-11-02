import { type FC, memo } from 'react';
import { type ICurrencyItemProps } from '@constants/interfaces/interfaces';

import { Container, CurrencyInfo, CurrencyName, CurrencySub } from './styled';

export const CurrencyItem: FC<ICurrencyItemProps> = memo(
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
