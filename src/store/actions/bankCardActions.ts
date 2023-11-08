export const setInputValueBankCard = (inputValueBankCard: string) => {
    return {
        type: 'BANKCARD/SET_INPUT_VALUE_BANK_CARD',
        payload: inputValueBankCard,
    } as const;
};
