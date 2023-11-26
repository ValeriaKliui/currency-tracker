import {
    type ChangeEvent,
    type FC,
    useCallback,
    useEffect,
    useMemo,
} from 'react';
import { CurrencyItem } from '@components/CurrencyItem';
import { Input } from '@components/Input';
import { Select } from '@components/Select';
import { CURRENCIES_ROUNDING } from '@constants/constants/currencies';
import { type CurrenciesConverterProps } from '@constants/interfaces/interfaces';
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

export const CurrenciesConverter: FC<CurrenciesConverterProps> = ({
    testID,
}) => {
    const dispatch = useAppDispatch();
    const baseCurrencyCode = useAppSelector(getBaseCurrencySelector);
    const currencyAmount = useAppSelector(getCurrencyAmount);
    const targetCurrency = useAppSelector(getTargetCurrencySelector);
    const convertedCurrencyValue = useAppSelector(getConvertedCurrencyValue);
    const currencies = useAppSelector(getCurrenciesSelector);

    const currenciesArray = useMemo(() => {
        const currenciesArray =
            currencies != null ? Object.values(currencies.data) : [];
        return currenciesArray;
    }, [currencies]);

    const convertedRoundedValue =
        targetCurrency !== null &&
        roundNumber(
            convertedCurrencyValue,
            CURRENCIES_ROUNDING[getCurrencyNameByCode(targetCurrency)],
        );

    useEffect(() => {
        if (baseCurrencyCode !== null && targetCurrency !== null)
            dispatch(fetchConversedCurrThunk(baseCurrencyCode, targetCurrency));
    }, [targetCurrency, baseCurrencyCode, dispatch]);

    useEffect(() => {
        dispatch(setCurrencyAmount(1));
        dispatch(setTargetCurrency(null));
    }, [baseCurrencyCode, dispatch]);

    const onChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setCurrencyAmount(Number(e.target.value)));
        },
        [dispatch],
    );

    return (
        <ConverterContainer data-testid={testID} data-cy={testID}>
            <CenteredTitle>Amount</CenteredTitle>
            <Input
                value={currencyAmount.toString()}
                onChange={onChange}
                type="number"
                testID="converter-amount"
            />
            <Title>From:</Title>
            {baseCurrencyCode !== null && (
                <CurrencyItem
                    currencyCode={baseCurrencyCode}
                    testID="base-currency"
                />
            )}
            <Title>To:</Title>
            <Select options={currenciesArray} testID="currency-selector" />
            {convertedCurrencyValue !== null && targetCurrency !== null && (
                <CenteredTitle data-cy="converted-amount">
                    {currencyAmount} {baseCurrencyCode} ={' '}
                    {Number(convertedRoundedValue) * currencyAmount}{' '}
                    {targetCurrency}
                </CenteredTitle>
            )}
        </ConverterContainer>
    );
};
