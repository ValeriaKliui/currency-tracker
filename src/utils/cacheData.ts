export const setCache = <Type>(cacheKey: string, data: Type[] | Type): void => {
    const cachedData = {
        timestamp: new Date(),
        data,
    };
    localStorage.setItem(cacheKey, JSON.stringify(cachedData));
};

export const getCache = <Type>(cacheKey: string): Type | null => {
    const cachedValue = localStorage.getItem(cacheKey);
    if (
        cachedValue !== null &&
        isCacheValid(
            JSON.parse(cachedValue).timestamp,
            process.env.REACT_APP_CACHE_MAX_DURATION_IN_HOURS,
        )
    )
        return JSON.parse(cachedValue).data;
    return null;
};

export const isCacheValid = (
    cacheTimestamp: string,
    cacheMaxDuration: string | undefined,
) => {
    const cacheTimestampDate = new Date(cacheTimestamp);
    const currentDate = new Date();
    const cacheDurationHours =
        (currentDate.getTime() - cacheTimestampDate.getTime()) / 3600000;
    return cacheDurationHours < Number(cacheMaxDuration);
};
