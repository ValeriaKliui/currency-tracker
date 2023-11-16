import { formatDate } from '@utils/formatDate';

describe('format date', () => {
    const cases = [[new Date('02-01-2017'), '2017-01-01']];

    test.each(cases)(
        'returns correctly formatted string for valid input',
        (firstArg: Date, expectedResult: string) => {
            const result = formatDate(new Date());
            expect(result).toEqual(expectedResult);
        },
    );
});
