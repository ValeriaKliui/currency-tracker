import { type RootStoreType } from '@store/types/interfaces';

export const getInputValueBankCard = (state: RootStoreType): string =>
    state.bankCard.inputValueBankCard;
