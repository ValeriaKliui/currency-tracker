import {
    CurrenciesEnum,
    type CurrencyCodeType,
} from '@constants/interfaces/interfaces';

export const getCurrencyNameByCode = (code: CurrencyCodeType) =>
    CurrenciesEnum[code];
