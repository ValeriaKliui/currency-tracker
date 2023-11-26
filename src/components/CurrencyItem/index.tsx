import { type FC, memo } from 'react';
import { CURRENCIES_LOGOS } from '@constants/constants/currencies';
import { type CurrencyItemProps } from '@constants/interfaces/interfaces';
import { getCurrencyNameByCode } from '@utils/getCurrencyNameByCode';

import {
    Container,
    CurrencyIcon,
    CurrencyInfo,
    CurrencyName,
    CurrencySubText,
} from './styled';

export const CurrencyItem: FC<CurrencyItemProps> = memo(
    ({
        currencyName,
        icon,
        onClick,
        currencyCode,
        scalable = false,
        subText,
        testID,
    }) => {
        const getIconSrc = () => {
            if (currencyCode !== undefined) {
                return CURRENCIES_LOGOS[getCurrencyNameByCode(currencyCode)];
            }
            if (icon !== null) return icon;
            return '';
        };

        const getCurrencyName = () => {
            if (currencyCode !== undefined)
                return getCurrencyNameByCode(currencyCode);
            if (currencyName !== null) return currencyName;
            return '';
        };

        return (
            <Container
                onClick={onClick}
                $scalable={scalable}
                $hoverable={onClick !== undefined}
                data-testid={testID}
                data-cy={testID}
            >
                <CurrencyIcon src={getIconSrc()} />
                <CurrencyInfo>
                    <CurrencyName>{getCurrencyName()}</CurrencyName>
                    <CurrencySubText>{subText ?? currencyCode}</CurrencySubText>
                </CurrencyInfo>
            </Container>
        );
    },
);
