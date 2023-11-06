import { type FC, useState } from 'react';
import {
    CurrenciesEnum,
    type SelectProps,
} from '@constants/interfaces/interfaces';
import { useAppDispatch, useAppSelector } from '@hooks/store';
import { useClickOutside } from '@hooks/useClickOutside';
import { setTargetCurrency } from '@store/actions/currencyActions';
import { getTargetCurrencySelector } from '@store/selectors/currencySelectors';

import {
    ChoosenOption,
    Option,
    OptionsContainer,
    SelectContainer,
} from './styled';

export const Select: FC<SelectProps> = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();
    const targetCurrencyCode = useAppSelector(getTargetCurrencySelector);
    const toggleSelect = (): void => {
        setIsOpen((prev) => !prev);
    };
    const ref = useClickOutside(() => {
        setIsOpen(false);
    });

    const chooseCurrency =
        (currencyCode: keyof typeof CurrenciesEnum) => () => {
            dispatch(setTargetCurrency(currencyCode));
            toggleSelect();
        };

    return (
        <SelectContainer ref={ref}>
            <ChoosenOption onClick={toggleSelect} $isOpen={isOpen}>
                {targetCurrencyCode !== null
                    ? CurrenciesEnum[targetCurrencyCode]
                    : 'Select currency'}
            </ChoosenOption>
            {isOpen && (
                <OptionsContainer>
                    {options.map((currency, index) => (
                        <Option
                            key={currency.code}
                            onClick={chooseCurrency(currency.code)}
                        >
                            {CurrenciesEnum[options[index].code]}
                        </Option>
                    ))}
                </OptionsContainer>
            )}
        </SelectContainer>
    );
};
