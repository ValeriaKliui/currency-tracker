export const formatDate = (date: Date) => {
    if (date.toString().toLowerCase() === 'invalid date') return '';
    const day = date.getDate() > 8 ? date.getDate() : `0${date.getDate()}`;
    const month =
        date.getMonth() > 8 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
};
