import { type FC } from 'react';
import { CurrencyItem } from '@components/CurrencyItem';
import { CURRENCIES_LOGOS } from '@constants/constants/currencies';
import { type HintsProps } from '@constants/interfaces/interfaces';
import { getCurrencyNameByCode } from '@utils/getCurrencyNameByCode';

import { OptionsContainer } from './styled';

export const Hints: FC<HintsProps> = ({ options, onOptionClick }) => {
    return (
        <OptionsContainer>
            {options.map((currency, index) => (
                <CurrencyItem
                    key={currency.code}
                    currencyName={`${getCurrencyNameByCode(
                        options[index].code,
                    )} (${currency.code})`}
                    icon={
                        CURRENCIES_LOGOS[
                            getCurrencyNameByCode(options[index].code)
                        ]
                    }
                    onClick={() => {
                        onOptionClick(currency.code);
                    }}
                    scalable={false}
                />
            ))}
        </OptionsContainer>
    );
};
