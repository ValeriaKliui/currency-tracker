import { convertTimeAMPM } from '@utils/convertTimeAMPM';

describe('convert time to AMPM format', () => {
    test('returns date string ampm for current date', () => {
        const result = convertTimeAMPM(new Date().toDateString());
        expect(result).toMatch(/(pm|am)/gi);
    });

    test('returns empty string for undefined input', () => {
        const result = convertTimeAMPM(undefined);
        expect(result).toStrictEqual('');
    });

    test('returns empty string for empty input', () => {
        const result = convertTimeAMPM('');
        expect(result).toStrictEqual('');
    });
});
