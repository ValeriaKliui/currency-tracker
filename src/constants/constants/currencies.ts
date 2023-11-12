import ARSLogo from '@assets/img/icons/ARS.png';
import AUDLogo from '@assets/img/icons/AUD.png';
import BovespaLogo from '@assets/img/icons/Bovespa.png';
import BTCLogo from '@assets/img/icons/BTC.png';
import CADLogo from '@assets/img/icons/CAD.png';
import CNYLogo from '@assets/img/icons/CNY.png';
import EURLogo from '@assets/img/icons/EUR.png';
import IFIXLogo from '@assets/img/icons/IFIX.png';
import JPYLogo from '@assets/img/icons/JPY.png';
import LTCLogo from '@assets/img/icons/LTC.png';
import USDLogo from '@assets/img/icons/USD.png';
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
        currencyName: 'Bovespa Index',
        value: '0.15%',
        icon: BovespaLogo,
    },
    {
        currencyName: 'IFIX',
        value: '0.15%',
        icon: IFIXLogo,
    },
];
export const CURRENCIES_HISTORY_AVAILABLE = ['EUR', 'BTC', 'LTC'];
