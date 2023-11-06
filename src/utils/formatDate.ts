export const formatDate = (date: Date) => {
    const day =
        date.getDate() > 8 ? date.getDate() + 1 : `0${date.getDate() + 1}`;
    const month =
        date.getMonth() > 8 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
};
