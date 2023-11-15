import {
    type Currencies,
    type Currency,
} from '@constants/interfaces/interfaces';

export const getAvailableCurrencies = (
    currencies: Currencies | null,
    filterCallback: (currency: Currency) => void,
): Currency[] =>
    currencies === null
        ? []
        : Object.values(currencies.data).filter(filterCallback);
