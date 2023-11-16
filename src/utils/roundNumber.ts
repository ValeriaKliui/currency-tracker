export const roundNumber = (
    number: number | null,
    rounding: number | null,
): string | null => {
    if (rounding === null || number === null || rounding < 0) return null;
    if (number !== null && rounding !== null) return number.toFixed(rounding);
    return null;
};
