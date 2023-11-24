import { getAvailableCurrencies } from '@utils/getAvailableCurrencies';

import { currenciesData } from '../mocks/mocks';

describe('get available currencies', () => {
    test('should return available currencies for filter func (find currencies with letter b)', () => {
        const result = getAvailableCurrencies(currenciesData, ({ code }) => {
            return code.toLowerCase().includes('b');
        });
        expect(result).toStrictEqual([currenciesData.data.BTC]);
    });

    test('should return available currencies for filter func (find currencies whose value > 100)', () => {
        const result = getAvailableCurrencies(currenciesData, ({ value }) => {
            return value > 100;
        });
        expect(result).toStrictEqual([
            currenciesData.data.ARS,
            currenciesData.data.JPY,
        ]);
    });

    test('should return empty array if currencies are null', () => {
        const result = getAvailableCurrencies(null, () => {});
        expect(result).toStrictEqual([]);
    });
});
