import { getCache, setCache } from '@utils/cacheData';

describe('set cache', () => {
    const testKey = 'testKey';
    const testDataOld = {
        root: '123',
        test: {},
    };
    const testDataNew = {
        new: {},
    };
    const getResultData = (data: any) => ({ timestamp: new Date(), data });

    test('should add data to localstorage', () => {
        const resultData = getResultData(testDataOld);

        setCache(testKey, testDataOld);
        expect(localStorage.getItem(testKey)).toStrictEqual(
            JSON.stringify(resultData),
        );
    });

    test('should override existing data in localstorage', () => {
        const testKey = 'testKey';
        const resultDataOld = localStorage.getItem(testKey);
        expect(localStorage.getItem(testKey)).toStrictEqual(resultDataOld);

        setCache(testKey, testDataNew);
        const resultDataNew = getResultData(testDataNew);
        expect(localStorage.getItem(testKey)).toStrictEqual(
            JSON.stringify(resultDataNew),
        );
    });
});

describe('get cache', () => {
    const OLD_ENV = process.env;
    beforeEach(() => {
        jest.resetModules();
        process.env = { ...OLD_ENV };
    });
    afterAll(() => {
        process.env = OLD_ENV;
    });

    const testData = {
        root: '123',
        test: {},
    };

    const testKey = 'testKey';
    process.env.REACT_APP_CACHE_MAX_DURATION_IN_HOURS = '24';

    test('should return data for testKey', () => {
        setCache(testKey, testData);
        const result = getCache(testKey);
        expect(result).toStrictEqual(testData);
    });

    test('should return null for incorrect testKey', () => {
        const result = getCache('wrong key');
        expect(result).toStrictEqual(null);
    });
});
