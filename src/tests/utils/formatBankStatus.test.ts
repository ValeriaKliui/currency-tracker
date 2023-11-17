import { BankOpened } from '@constants/interfaces/interfaces';
import { formatBankStatus } from '@utils/formatBankStatus';

describe('format bank status', () => {
    const cases = Object.entries(BankOpened);

    test.each(cases)(
        'should format received bank status to humanly read status',
        (expectedResult: string, firstArg: string) => {
            const result = formatBankStatus(firstArg);
            expect(result).toStrictEqual(expectedResult);
        },
    );

    test('should return emplty string for non existent status', () => {
        const resultNull = formatBankStatus(null);
        const resultWrong = formatBankStatus('wrong status');
        const expectedResult = '';
        expect(resultNull).toStrictEqual(expectedResult);
        expect(resultWrong).toStrictEqual(expectedResult);
    });
});
