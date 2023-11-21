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
    meta: {
        last_updated_at: '2023-10-30T23:59:59Z',
    },
    data: {
        ARS: {
            code: 'ARS',
            value: 350.0210225314,
        },
        AUD: {
            code: 'AUD',
            value: 1.5702001694,
        },
        BTC: {
            code: 'BTC',
            value: 0.0000289942,
        },
        CAD: {
            code: 'CAD',
            value: 1.3828801919,
        },
        CNY: {
            code: 'CNY',
            value: 7.3134514276,
        },
        EUR: {
            code: 'EUR',
            value: 0.9418101495,
        },
        JPY: {
            code: 'JPY',
            value: 149.1421572962,
        },
        LTC: {
            code: 'LTC',
            value: 0.014456536,
        },
        USD: {
            code: 'USD',
            value: 1,
        },
    },
};
export const timelineData: TimelineDayData[] = [
    {
        time_period_start: '2023-10-21T00:00:00.0000000Z',
        time_period_end: '2023-10-22T00:00:00.0000000Z',
        time_open: '2023-10-21T00:00:08.2050000Z',
        time_close: '2023-10-21T23:59:19.6030000Z',
        price_open: 29682,
        price_high: 30357,
        price_low: 29483,
        price_close: 29927,
        volume_traded: 899.1075086,
        trades_count: 9138,
    },
    {
        time_period_start: '2023-10-22T00:00:00.0000000Z',
        time_period_end: '2023-10-23T00:00:00.0000000Z',
        time_open: '2023-10-22T00:00:25.8030000Z',
        time_close: '2023-10-22T23:59:41.1330000Z',
        price_open: 29921,
        price_high: 30247,
        price_low: 29678,
        price_close: 30002,
        volume_traded: 918.65122289,
        trades_count: 8652,
    },
    {
        time_period_start: '2023-10-23T00:00:00.0000000Z',
        time_period_end: '2023-10-24T00:00:00.0000000Z',
        time_open: '2023-10-23T00:00:24.0400000Z',
        time_close: '2023-10-23T23:59:55.4540000Z',
        price_open: 30007,
        price_high: 34283,
        price_low: 29898,
        price_close: 33074,
        volume_traded: 4860.67261458,
        trades_count: 25800,
    },
];
