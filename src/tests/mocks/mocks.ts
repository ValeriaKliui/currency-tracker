import {
    type Currencies,
    type TimelineDayData,
} from '@constants/interfaces/interfaces';

export const banksData = [
    JSON.parse(`{
            "fsq_id": "4f5de548e4b008b15884e83b",
            "name": "Технобанк"
         }`),
    JSON.parse(`{
            "fsq_id": "4f5de548e4b008b15884e83b",
            "name": "ВТБ Банк"
         }`),
    JSON.parse(`{
            "fsq_id": "4f5de548e4b008b15884e83b",
            "name": "Приорбанк"
        }`),
    JSON.parse(`{
           "fsq_id": "4f5de548e4b008b15884e83b",
           "name": "Белинвест 527/379"
        }`),
];

export const currenciesData: Currencies = {
    meta: { last_updated_at: '2023-11-23T23:59:59Z' },
    data: {
        ARS: { code: 'ARS', value: 356.931810664 },
        AUD: { code: 'AUD', value: 1.5241502041 },
        BTC: { code: 'BTC', value: 0.0000267554 },
        CAD: { code: 'CAD', value: 1.3694001547 },
        CNY: { code: 'CNY', value: 7.1446710353 },
        EUR: { code: 'EUR', value: 0.9169501549 },
        JPY: { code: 'JPY', value: 149.6046601414 },
        LTC: { code: 'LTC', value: 0.0143823824 },
        USD: { code: 'USD', value: 1 },
    },
};
export const timelineData: TimelineDayData[] = [
    {
        price_close: 27995,
        price_high: 28053,
        price_low: 26959,
        price_open: 26965,
        time_close: '2023-10-01T23:59:58.4650000Z',
        time_open: '2023-10-01T00:00:05.0930000Z',
        time_period_end: '2023-10-02T00:00:00.0000000Z',
        time_period_start: '2023-10-01T00:00:00.0000000Z',
        trades_count: 12862,
        volume_traded: 1256.36259579,
    },
    {
        price_close: 27507,
        price_high: 28592,
        price_low: 27333,
        price_open: 27995,
        time_close: '2023-10-02T23:59:59.3580000Z',
        time_open: '2023-10-02T00:00:04.1060000Z',
        time_period_end: '2023-10-03T00:00:00.0000000Z',
        time_period_start: '2023-10-02T00:00:00.0000000Z',
        trades_count: 24813,
        volume_traded: 2557.55342098,
    },
    {
        price_close: 27435,
        price_high: 27670,
        price_low: 27170,
        price_open: 27509,
        time_close: '2023-10-03T23:59:46.8050000Z',
        time_open: '2023-10-03T00:00:10.2070000Z',
        time_period_end: '2023-10-04T00:00:00.0000000Z',
        time_period_start: '2023-10-03T00:00:00.0000000Z',
        trades_count: 17226,
        volume_traded: 1304.3038689,
    },
    {
        price_close: 27790,
        price_high: 27831,
        price_low: 27221,
        price_open: 27431,
        time_close: '2023-10-04T23:59:57.6530000Z',
        time_open: '2023-10-04T00:00:07.4540000Z',
        time_period_end: '2023-10-05T00:00:00.0000000Z',
        time_period_start: '2023-10-04T00:00:00.0000000Z',
        trades_count: 10892,
        volume_traded: 1262.33085158,
    },
];
