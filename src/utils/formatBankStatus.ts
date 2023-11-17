import { BankOpened } from '@constants/interfaces/interfaces';

export const formatBankStatus = (status: string | null) => {
    const wrongStatus =
        status === null ||
        !Object.values(BankOpened)
            .map((status) => status.toString())
            .includes(status);

    if (wrongStatus) return '';
    return Object.entries(BankOpened).filter(
        (statusBank) => statusBank[1] === status,
    )[0][0];
};
