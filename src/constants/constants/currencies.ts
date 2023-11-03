import ARSLogo from '@assets/img/icons/ARS.svg';
import AUDLogo from '@assets/img/icons/AUD.svg';
import BovespaLogo from '@assets/img/icons/Bovespa.svg';
import BTCLogo from '@assets/img/icons/BTC.svg';
import CADLogo from '@assets/img/icons/CAD.svg';
import CNYLogo from '@assets/img/icons/CNY.svg';
import EURLogo from '@assets/img/icons/EUR.svg';
import IFIXLogo from '@assets/img/icons/IFIX.svg';
import JPYLogo from '@assets/img/icons/JPY.svg';
import LTCLogo from '@assets/img/icons/LTC.svg';
import USDLogo from '@assets/img/icons/USD.svg';
import { CurrenciesEnum } from '@constants/interfaces/interfaces';

export const CURRENCIES_LOGOS = {
    [CurrenciesEnum.ARS]: ARSLogo,
    [CurrenciesEnum.AUD]: AUDLogo,
    [CurrenciesEnum.BTC]: BTCLogo,
    [CurrenciesEnum.CAD]: CADLogo,
    [CurrenciesEnum.CNY]: CNYLogo,
    [CurrenciesEnum.EUR]: EURLogo,
    [CurrenciesEnum.JPY]: JPYLogo,
    [CurrenciesEnum.LTC]: LTCLogo,
    [CurrenciesEnum.USD]: USDLogo,
};

export const CURRENCIES_ROUNDING = {
    [CurrenciesEnum.ARS]: 2,
    [CurrenciesEnum.AUD]: 2,
    [CurrenciesEnum.BTC]: 6,
    [CurrenciesEnum.CAD]: 1,
    [CurrenciesEnum.CNY]: 2,
    [CurrenciesEnum.EUR]: 3,
    [CurrenciesEnum.JPY]: 2,
    [CurrenciesEnum.LTC]: 4,
    [CurrenciesEnum.USD]: 2,
};

export const STOCKS = [
    {
        currencyName: 'BovespaIndex',
        value: '0.15%',
        icon: BovespaLogo,
    },
    {
        currencyName: 'IFIX',
        value: '0.15%',
        icon: IFIXLogo,
    },
];
