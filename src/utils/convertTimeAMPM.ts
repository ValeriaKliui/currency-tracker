export const convertTimeAMPM = (dateString: string | undefined): string => {
    if (dateString === undefined || dateString.length === 0) return '';

    const timeZoneDate = new Date(Date.parse(dateString)).toLocaleString(
        'en-US',
        { timeZone: 'UTC' },
    );
    const convertedTime = new Date(Date.parse(timeZoneDate))
        .toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        })
        .toLowerCase();
    return convertedTime;
};
