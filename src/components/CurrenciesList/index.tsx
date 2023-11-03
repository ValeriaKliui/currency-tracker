import { type FC, useCallback, useEffect } from 'react';
import { CurrencyItem } from '@components/CurrencyItem';
import { Error } from '@components/Error';
import {
    CURRENCIES_LOGOS,
    CURRENCIES_ROUNDING,
    STOCKS,
} from '@constants/constants/currencies';
import {
    CurrenciesEnum,
    type CurrencyItemProps,
} from '@constants/interfaces/interfaces';
import { useAppDispatch, useAppSelector } from '@hooks/store';
import { openModal } from '@store/actions/appActions';
import { setBaseCurrency } from '@store/actions/currencyActions';
import {
    getQuotesError,
    getQuotesSelector,
} from '@store/selectors/currencySelectors';
import { fetchCurrencyThunk } from '@store/services/currencyThunk';

import { CurrenciesContainer, EmptyCell, Hr, Title, Wrapper } from './styled';
import { roundNumber } from '@utils/roundNumber';

export const CurrenciesList: FC = () => {
    const quotes = useAppSelector(getQuotesSelector);
    const error = useAppSelector(getQuotesError);

    const dispatch = useAppDispatch();
    useEffect(() => {
        if (quotes === null) dispatch(fetchCurrencyThunk());
    }, []);

    const handleClick = useCallback(
        (code: keyof typeof CurrenciesEnum | null) => () => {
            dispatch(openModal());
            dispatch(setBaseCurrency(code));
        },
        [],
    );
    const toStringRound = (
        value: number,
        code: keyof typeof CurrenciesEnum,
    ) => {
        return String(
            roundNumber(value, CURRENCIES_ROUNDING[CurrenciesEnum[code]]),
        );
    };

    return (
        <Wrapper>
            <CurrenciesContainer>
                <div>
                    <Title>Stocks</Title>
                    <Hr />
                </div>
                <EmptyCell />
                {STOCKS.map(
                    ({ currencyName, value, icon }: CurrencyItemProps) => (
                        <CurrencyItem
                            key={currencyName}
                            currencyName={currencyName}
                            value={value}
                            icon={icon}
                        />
                    ),
                )}
            </CurrenciesContainer>
            {error !== null && <Error text={error} />}
            {quotes !== null && (
                <CurrenciesContainer>
                    <div>
                        <Title>Quotes</Title>
                        <Hr />
                    </div>
                    <EmptyCell />
                    {quotes !== null &&
                        Object.values(quotes.data).map(({ code, value }) => {
                            return (
                                <CurrencyItem
                                    key={code}
                                    icon={
                                        CURRENCIES_LOGOS[CurrenciesEnum[code]]
                                    }
                                    currencyName={CurrenciesEnum[code]}
                                    value={toStringRound(value, code)}
                                    onClick={handleClick(code)}
                                />
                            );
                        })}
                </CurrenciesContainer>
            )}
        </Wrapper>
    );
};
