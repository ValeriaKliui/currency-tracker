import { CurrenciesEnum } from '@constants/interfaces/interfaces';
import { getCurrencyNameByCode } from '@utils/getCurrencyNameByCode';

describe('get currency name by code', () => {
    const cases = Object.entries(CurrenciesEnum);

    test.each(cases)(
        'should return currency name by currency code',
        (firstArg: keyof typeof CurrenciesEnum, expectedResult: string) => {
            const result = getCurrencyNameByCode(firstArg);
            expect(result).toStrictEqual(expectedResult);
        },
    );
});
