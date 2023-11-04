import { type FC, memo } from 'react';
import { type CurrencyItemProps } from '@constants/interfaces/interfaces';

import {
    Container,
    CurrencyIcon,
    CurrencyInfo,
    CurrencyName,
    CurrencySubText,
} from './styled';

export const CurrencyItem: FC<CurrencyItemProps> = memo(
    ({ currencyName, value, icon, onClick, code }) => {
        return (
            <Container onClick={onClick}>
                <CurrencyIcon src={icon} />
                <CurrencyInfo>
                    <CurrencyName>{currencyName}</CurrencyName>
                    <CurrencySubText>{value}</CurrencySubText>
                    {code !== null && <CurrencySubText>{code}</CurrencySubText>}
                </CurrencyInfo>
            </Container>
        );
    },
);
