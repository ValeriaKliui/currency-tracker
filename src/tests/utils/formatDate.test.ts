import { formatDate } from '@utils/formatDate';

describe('format date', () => {
    const cases = [
        [new Date('2017-01-01T01:00:00.000Z'), '2017-01-01'],
        [new Date('2000-12-31T00:00:00.000Z'), '2000-12-31'],
        [new Date('2020-10-23T00:00:00.000Z'), '2020-10-23'],
    ];

    test.each(cases)(
        'returns correctly formatted string for valid input',
        (firstArg: Date, expectedResult: string) => {
            const result = formatDate(firstArg);
            expect(result).toStrictEqual(expectedResult);
        },
    );

    test('returns empty string for invalid date', () => {
        const result = formatDate(new Date('2123-39-31T00:00:00.000Z'));
        expect(result).toStrictEqual('');
    });

    test('returns next month date for non existing day', () => {
        const result = formatDate(new Date('2023-11-31T00:00:00.000Z'));
        expect(result).toStrictEqual('2023-12-01');
    });
});
