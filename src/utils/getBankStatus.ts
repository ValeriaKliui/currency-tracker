import { BankOpened } from '@constants/interfaces/interfaces';

export const getBankStatus = (status: BankOpened) => {
    return Object.entries(BankOpened).filter(
        (statusBank) => statusBank[1] === status,
    )[0][0];
};
