import { type setInputValueBankCard } from '@store/actions/bankCardActions';

export interface BankCardState {
    inputValueBankCard: string;
}
export type BankCardActions = ReturnType<typeof setInputValueBankCard>;
