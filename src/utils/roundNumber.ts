export const roundNumber = (number: number | null, rounding: number | null) => {
    if (number !== null && rounding !== null) return number.toFixed(rounding);
    return null;
};
