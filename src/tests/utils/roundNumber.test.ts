import { roundNumber } from '@utils/roundNumber';

describe('round number', () => {
    const cases = [
        [234.1, 2, '234.10'],
        [234.123234, 0, '234'],
        [0.342413423, 5, '0.34241'],
        [0.342413423, -5, null],
    ];

    test('returns null for null input', () => {
        const result = roundNumber(null, null);
        expect(result).toEqual(null);
    });

    test.each(cases)(
        'returns correctly formatted string for valid input',
        (firstArg: number, secondArg: number, expectedResult: string) => {
            const result = roundNumber(firstArg, secondArg);
            expect(result).toEqual(expectedResult);
        },
    );
});
