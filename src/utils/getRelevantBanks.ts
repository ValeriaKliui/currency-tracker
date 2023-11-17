import { type Bank } from '@constants/interfaces/interfaces';

export const getRelevantBanks = (
    currencyCode: string | null,
    banksData: Bank[] | null,
): Bank[] => {
    if (banksData === null) return [];
    switch (currencyCode) {
        case 'EUR || USD':
            return banksData;
        case 'CAD':
            return banksData?.filter((bank) => {
                return (
                    bank.name.toLowerCase().includes('bsb') ||
                    bank.name.toLowerCase().includes('приор') ||
                    bank.name.toLowerCase().includes('бнб') ||
                    bank.name.toLowerCase().includes('белинвест')
                );
            });
        case 'ARS':
            return banksData?.filter((bank) => {
                return (
                    bank.name.toLowerCase().includes('bsb') ||
                    bank.name.toLowerCase().includes('альфа') ||
                    bank.name.toLowerCase().includes('вэб') ||
                    bank.name.toLowerCase().includes('мтб') ||
                    bank.name.toLowerCase().includes('дабрабыт')
                );
            });
        case 'BTC':
            return banksData?.filter((bank) => {
                return (
                    bank.name.toLowerCase().includes('bsb') ||
                    bank.name.toLowerCase().includes('приор') ||
                    bank.name.toLowerCase().includes('вэб') ||
                    bank.name.toLowerCase().includes('инвест') ||
                    bank.name.toLowerCase().includes('абсолют')
                );
            });
        case 'LTC':
            return banksData?.filter((bank) => {
                return (
                    bank.name.toLowerCase().includes('альфа') ||
                    bank.name.toLowerCase().includes('бнб') ||
                    bank.name.toLowerCase().includes('мтб') ||
                    bank.name.toLowerCase().includes('сбер')
                );
            });
        case 'JPY':
            return banksData?.filter((bank) => {
                return (
                    bank.name.toLowerCase().includes('альфа') ||
                    bank.name.toLowerCase().includes('техно') ||
                    bank.name.toLowerCase().includes('абсолют') ||
                    bank.name.toLowerCase().includes('сбер')
                );
            });
        case 'AUD':
            return banksData?.filter((bank) => {
                return (
                    bank.name.toLowerCase().includes('белинвест') ||
                    bank.name.toLowerCase().includes('техно') ||
                    bank.name.toLowerCase().includes('абсолют') ||
                    bank.name.toLowerCase().includes('бнб')
                );
            });
        case 'CNY':
            return banksData?.filter((bank) => {
                return (
                    bank.name.toLowerCase().includes('альфа') ||
                    bank.name.toLowerCase().includes('приор') ||
                    bank.name.toLowerCase().includes('дабрабыт') ||
                    bank.name.toLowerCase().includes('мтб') ||
                    bank.name.toLowerCase().includes('сбер')
                );
            });
        case undefined:
            return banksData;
        default:
            return banksData;
    }
};
