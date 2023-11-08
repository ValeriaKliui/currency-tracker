import { type FC, useCallback, useEffect } from 'react';
import { CurrencyItem } from '@components/CurrencyItem';
import { Error } from '@components/Error';
import {
    CURRENCIES_LOGOS,
    CURRENCIES_ROUNDING,
    STOCKS,
} from '@constants/constants/currencies';
import {
    type CurrenciesEnum,
    type CurrencyItemProps,
} from '@constants/interfaces/interfaces';
import { useAppDispatch, useAppSelector } from '@hooks/store';
import { openModal } from '@store/actions/appActions';
import { setBaseCurrency } from '@store/actions/currencyActions';
import {
    getCurrenciesError,
    getCurrenciesSelector,
} from '@store/selectors/currencySelectors';
import { fetchCurrencyThunk } from '@store/services/currencyThunk';
import { getCurrencyNameByCode } from '@utils/getCurrencyNameByCode';
import { roundNumber } from '@utils/roundNumber';

import { CurrenciesContainer, EmptyCell, Hr, Title, Wrapper } from './styled';

export const CurrenciesList: FC = () => {
    const currencies = useAppSelector(getCurrenciesSelector);
    const error = useAppSelector(getCurrenciesError);

    const dispatch = useAppDispatch();
    useEffect(() => {
        if (currencies === null) dispatch(fetchCurrencyThunk());
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
            roundNumber(
                value,
                CURRENCIES_ROUNDING[getCurrencyNameByCode(code)],
            ),
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
                            scalable={false}
                            hoverable={false}
                        />
                    ),
                )}
            </CurrenciesContainer>
            {error !== null && <Error text={error} />}
            {currencies !== null && (
                <CurrenciesContainer>
                    <div>
                        <Title>Quotes</Title>
                        <Hr />
                    </div>
                    <EmptyCell />
                    {currencies !== null &&
                        Object.values(currencies.data).map(
                            ({ code, value }) => {
                                return (
                                    <CurrencyItem
                                        key={code}
                                        icon={
                                            CURRENCIES_LOGOS[
                                                getCurrencyNameByCode(code)
                                            ]
                                        }
                                        currencyName={getCurrencyNameByCode(
                                            code,
                                        )}
                                        value={toStringRound(value, code)}
                                        onClick={handleClick(code)}
                                    />
                                );
                            },
                        )}
                </CurrenciesContainer>
            )}
        </Wrapper>
    );
};
