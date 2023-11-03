import { type FC, memo } from 'react';
import { type CurrencyItemProps } from '@constants/interfaces/interfaces';

import {
    Container,
    CurrencyInfo,
    CurrencyName,
    CurrencySubText,
} from './styled';

export const CurrencyItem: FC<CurrencyItemProps> = memo(
    ({ currencyName, value, icon, onClick, code }) => {
        const CurrencyIcon = icon;
        return (
            <Container onClick={onClick}>
                <CurrencyIcon />
                <CurrencyInfo>
                    <CurrencyName>{currencyName}</CurrencyName>
                    <CurrencySubText>{value}</CurrencySubText>
                    {code !== null && <CurrencySubText>{code}</CurrencySubText>}
                </CurrencyInfo>
            </Container>
        );
    },
);
