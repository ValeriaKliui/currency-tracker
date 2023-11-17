import { Bank } from '@constants/interfaces/interfaces';
import { getRelevantBanks } from '@utils/getRelevantBanks';
import { bankData } from '../mocks/mocks';

describe('get relevant banks for choosen currency', () => {
    const cases = [
        [
            'JPY',
            bankData,
            bankData.filter((bank) =>
                Boolean(bank.name.toLowerCase().includes('техно')),
            ),
        ],
        [
            'AUD',
            bankData,
            bankData.filter(
                (bank) =>
                    Boolean(bank.name.toLowerCase().includes('белинв')) ||
                    Boolean(bank.name.toLowerCase().includes('техно')),
            ),
        ],
        ['EUR', bankData, bankData],
    ];

    test.each(cases)(
        'returns correctly formatted string for valid input',
        (firstArg: string, secondArg: Bank[], expectedResult: Bank[]) => {
            const result = getRelevantBanks(firstArg, secondArg);
            expect(result).toStrictEqual(expectedResult);
        },
    );

    test('should return all banks for incorredct input', () => {
        const resultEmpty = getRelevantBanks('', bankData);
        expect(resultEmpty).toStrictEqual(bankData);

        const resultWrong = getRelevantBanks('wrong data', bankData);
        expect(resultWrong).toStrictEqual(bankData);
    });

    test('should return empty array if no banks data', () => {
        const resultEmpty = getRelevantBanks('USD', null);
        expect(resultEmpty).toStrictEqual([]);
    });
});
