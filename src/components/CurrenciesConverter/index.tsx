import { type FC, useEffect, useState } from 'react';
import { CurrencyItem } from '@components/CurrencyItem';
import { Input } from '@components/Input';
import { Select } from '@components/Select';
import {
    CURRENCIES_LOGOS,
    CURRENCIES_ROUNDING,
} from '@constants/constants/currencies';
import { useAppDispatch, useAppSelector } from '@hooks/store';
import {
    getBaseCurrencySelector,
    getConvertedCurrencyValue,
    getCurrenciesSelector,
    getTargetCurrencySelector,
} from '@store/selectors/currencySelectors';
import { fetchConversedCurrThunk } from '@store/services/currencyThunk';
import { getCurrencyNameByCode } from '@utils/getCurrencyNameByCode';
import { roundNumber } from '@utils/roundNumber';

import { CenteredTitle, ConverterContainer, Title } from './styled';

export const CurrenciesConverter: FC = () => {
    const [amount, setAmount] = useState('1');
    const dispatch = useAppDispatch();
    const baseCurrencyCode = useAppSelector(getBaseCurrencySelector);
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
    }, [targetCurrency]);

    return (
        <ConverterContainer>
            <CenteredTitle>Amount</CenteredTitle>
            <Input
                value={amount}
                onChange={(e) => {
                    setAmount(e.target.value);
                }}
                type="number"
            />
            <Title>From:</Title>
            {baseCurrencyCode !== null && (
                <CurrencyItem
                    currencyName={getCurrencyNameByCode(baseCurrencyCode)}
                    icon={
                        CURRENCIES_LOGOS[
                            getCurrencyNameByCode(baseCurrencyCode)
                        ]
                    }
                    scalable={false}
                    hoverable={false}
                />
            )}
            <h3>To:</h3>
            <Select options={currenciesArray} />
            {convertedCurrencyValue !== null && amount !== '' && (
                <>
                    <CenteredTitle>
                        {amount} {baseCurrencyCode} ={' '}
                        {Number(convertedRoundedValue) * Number(amount)}
                        {targetCurrency}
                    </CenteredTitle>
                </>
            )}
        </ConverterContainer>
    );
};
