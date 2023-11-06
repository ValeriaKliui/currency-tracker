import { type FC, useEffect } from 'react';
import { Select } from '@components/Select';
import { CURRENCIES_ROUNDING } from '@constants/constants/currencies';
import { CurrenciesEnum } from '@constants/interfaces/interfaces';
import { useAppDispatch, useAppSelector } from '@hooks/store';
import {
    getBaseCurrencySelector,
    getConvertedCurrencyValue,
    getCurrenciesSelector,
    getTargetCurrencySelector,
} from '@store/selectors/currencySelectors';
import { fetchConversedCurrThunk } from '@store/services/currencyThunk';
import { roundNumber } from '@utils/roundNumber';

import { CurrContainer } from './styled';

export const CurrenciesConverter: FC = () => {
    const dispatch = useAppDispatch();
    const baseCurrency = useAppSelector(getBaseCurrencySelector);
    const targetCurrency = useAppSelector(getTargetCurrencySelector);
    const convertedCurrencyValue = useAppSelector(getConvertedCurrencyValue);
    const currencies = useAppSelector(getCurrenciesSelector);
    const currenciesArray =
        currencies != null ? Object.values(currencies.data) : [];
    const convertedRoundedValue =
        convertedCurrencyValue !== null &&
        targetCurrency !== null &&
        roundNumber(
            convertedCurrencyValue,
            CURRENCIES_ROUNDING[CurrenciesEnum[targetCurrency]],
        );

    useEffect(() => {
        if (baseCurrency !== null && targetCurrency !== null)
            dispatch(fetchConversedCurrThunk(baseCurrency, targetCurrency));
    }, [targetCurrency]);

    return (
        <>
            <CurrContainer>
                {baseCurrency !== null && (
                    <p>Base currency: {CurrenciesEnum[baseCurrency]}</p>
                )}
            </CurrContainer>
            <CurrContainer>
                <p>Target currency:</p>
                <Select options={currenciesArray} />
            </CurrContainer>
            <CurrContainer>
                {convertedCurrencyValue !== null && (
                    <>
                        <p>1 {baseCurrency} = </p>
                        <p>
                            {convertedRoundedValue} {targetCurrency}
                        </p>
                    </>
                )}
            </CurrContainer>
        </>
    );
};
