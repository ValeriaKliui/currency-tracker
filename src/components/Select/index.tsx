import { type FC, useState } from 'react';
import { Hints } from '@components/Hints';
import {
    type CurrenciesEnum,
    type SelectProps,
} from '@constants/interfaces/interfaces';
import { useAppDispatch, useAppSelector } from '@hooks/store';
import { useClickOutside } from '@hooks/useClickOutside';
import { setTargetCurrency } from '@store/actions/currencyActions';
import { getTargetCurrencySelector } from '@store/selectors/currencySelectors';
import { getCurrencyNameByCode } from '@utils/getCurrencyNameByCode';

import { ChoosenOption, SelectContainer } from './styled';

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

    const chooseCurrency = (currencyCode: keyof typeof CurrenciesEnum) => {
        dispatch(setTargetCurrency(currencyCode));
        toggleSelect();
    };

    return (
        <SelectContainer ref={ref}>
            <ChoosenOption onClick={toggleSelect} $isOpen={isOpen}>
                {targetCurrencyCode !== null
                    ? getCurrencyNameByCode(targetCurrencyCode)
                    : 'Select currency'}
            </ChoosenOption>
            {isOpen && (
                <Hints options={options} onOptionClick={chooseCurrency} />
            )}
        </SelectContainer>
    );
};
