import { Currencies } from '@constants/interfaces/interfaces';

export const bankData = [
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
