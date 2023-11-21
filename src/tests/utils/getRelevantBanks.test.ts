import { type Bank } from '@constants/interfaces/interfaces';
import { getRelevantBanks } from '@utils/getRelevantBanks';

import { banksData } from '../mocks/mocks';

describe('get relevant banks for choosen currency', () => {
    const cases = [
        [
            'JPY',
            banksData,
            banksData.filter((bank) =>
                Boolean(bank.name.toLowerCase().includes('техно')),
            ),
        ],
        [
            'AUD',
            banksData,
            banksData.filter(
                (bank) =>
                    Boolean(bank.name.toLowerCase().includes('белинв')) ||
                    Boolean(bank.name.toLowerCase().includes('техно')),
            ),
        ],
        ['EUR', banksData, banksData],
    ];

    test.each(cases)(
        'returns correctly formatted string for valid input',
        (firstArg: string, secondArg: Bank[], expectedResult: Bank[]) => {
            const result = getRelevantBanks(firstArg, secondArg);
            expect(result).toStrictEqual(expectedResult);
        },
    );

    test('should return all banks for incorredct input', () => {
        const resultEmpty = getRelevantBanks('', banksData);
        expect(resultEmpty).toStrictEqual(banksData);

        const resultWrong = getRelevantBanks('wrong data', banksData);
        expect(resultWrong).toStrictEqual(banksData);
    });

    test('should return empty array if no banks data', () => {
        const resultEmpty = getRelevantBanks('USD', null);
        expect(resultEmpty).toStrictEqual([]);
    });
});
