import { CurrenciesEnum } from '@constants/interfaces/interfaces';

export const getCurrencyNameByCode = (code: keyof typeof CurrenciesEnum) => {
    return CurrenciesEnum[code];
};
