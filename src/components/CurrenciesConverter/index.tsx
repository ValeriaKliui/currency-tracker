import { type FC, useEffect } from 'react';
import { CurrencyItem } from '@components/CurrencyItem';
import { Input } from '@components/Input';
import { Select } from '@components/Select';
import { CURRENCIES_ROUNDING } from '@constants/constants/currencies';
import { useAppDispatch, useAppSelector } from '@hooks/store';
import {
    setCurrencyAmount,
    setTargetCurrency,
} from '@store/actions/currencyActions';
import {
    getBaseCurrencySelector,
    getConvertedCurrencyValue,
    getCurrenciesSelector,
    getCurrencyAmount,
    getTargetCurrencySelector,
} from '@store/selectors/currencySelectors';
import { fetchConversedCurrThunk } from '@store/services/currencyThunk';
import { getCurrencyNameByCode } from '@utils/getCurrencyNameByCode';
import { roundNumber } from '@utils/roundNumber';

import { CenteredTitle, ConverterContainer, Title } from './styled';

export const CurrenciesConverter: FC = () => {
    const dispatch = useAppDispatch();
    const baseCurrencyCode = useAppSelector(getBaseCurrencySelector);
    const currencyAmount = useAppSelector(getCurrencyAmount);
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
            CURRENCIES_ROUNDING[getCurrencyNameByCode(targetCurrency)],
        );

    useEffect(() => {
        if (baseCurrencyCode !== null && targetCurrency !== null)
            dispatch(fetchConversedCurrThunk(baseCurrencyCode, targetCurrency));
    }, [targetCurrency, baseCurrencyCode]);

    useEffect(() => {
        dispatch(setCurrencyAmount(1));
        dispatch(setTargetCurrency(null));
    }, [baseCurrencyCode]);

    return (
        <ConverterContainer>
            <CenteredTitle>Amount</CenteredTitle>
            <Input
                value={currencyAmount.toString()}
                onChange={(e) => {
                    dispatch(setCurrencyAmount(Number(e.target.value)));
                }}
                type="number"
            />
            <Title>From:</Title>
            {baseCurrencyCode !== null && (
                <CurrencyItem currencyCode={baseCurrencyCode} />
            )}
            <h3>To:</h3>
            <Select options={currenciesArray} />
            {convertedCurrencyValue !== null && targetCurrency !== null && (
                <>
                    <CenteredTitle>
                        {currencyAmount} {baseCurrencyCode} ={' '}
                        {Number(convertedRoundedValue) * currencyAmount}{' '}
                        {targetCurrency}
                    </CenteredTitle>
                </>
            )}
        </ConverterContainer>
    );
};
