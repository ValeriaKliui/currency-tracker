import { type FC, useCallback } from 'react';
import { CurrencyItem } from '@components/CurrencyItem';
import {
    type CurrencyCodeType,
    type HintsProps,
} from '@constants/interfaces/interfaces';
import { useAppDispatch, useAppSelector } from '@hooks/store';
import { useClickOutside } from '@hooks/useClickOutside';
import { setIsHintsOpened } from '@store/actions/appActions';
import { getIsHintsOpened } from '@store/selectors/appSelector';

import { OptionsContainer } from './styled';

export const Hints: FC<HintsProps> = ({ options, onOptionClick }) => {
    const dispatch = useAppDispatch();
    const isHintsOpened = useAppSelector(getIsHintsOpened);

    const ref = useClickOutside(() => {
        dispatch(setIsHintsOpened(false));
    });

    const handleClick = useCallback(
        (code: CurrencyCodeType | null) => () => {
            dispatch(setIsHintsOpened(false));
            code !== null && onOptionClick(code);
        },
        [],
    );

    return (
        <OptionsContainer $isShowing={isHintsOpened} ref={ref}>
            {options.map(({ code }) => (
                <CurrencyItem
                    key={code}
                    currencyCode={code}
                    onClick={handleClick(code)}
                />
            ))}
        </OptionsContainer>
    );
};
