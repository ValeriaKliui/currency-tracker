import { type FC } from 'react';
import { Hints } from '@components/Hints';
import {
    type CurrencyCodeType,
    type SelectProps,
} from '@constants/interfaces/interfaces';
import { useAppDispatch, useAppSelector } from '@hooks/store';
import { setIsHintsOpened } from '@store/actions/appActions';
import { setTargetCurrency } from '@store/actions/currencyActions';
import { getIsHintsOpened } from '@store/selectors/appSelector';
import { getTargetCurrencySelector } from '@store/selectors/currencySelectors';
import { getCurrencyNameByCode } from '@utils/getCurrencyNameByCode';

import { ChoosenOption, SelectContainer } from './styled';

export const Select: FC<SelectProps> = ({ options }) => {
    const dispatch = useAppDispatch();
    const isHintsOpened = useAppSelector(getIsHintsOpened);
    const targetCurrencyCode = useAppSelector(getTargetCurrencySelector);

    const chooseCurrency = (currencyCode: CurrencyCodeType) => {
        dispatch(setTargetCurrency(currencyCode));
    };
    const openHints = () => {
        dispatch(setIsHintsOpened(true));
    };

    return (
        <SelectContainer>
            <ChoosenOption $isOpen={isHintsOpened} onClick={openHints}>
                {targetCurrencyCode !== null
                    ? getCurrencyNameByCode(targetCurrencyCode)
                    : 'Select currency'}
            </ChoosenOption>
            <Hints options={options} onOptionClick={chooseCurrency} />
        </SelectContainer>
    );
};
