export const getFormattedDate = (value, time = true) => {
    if (!value) {
        return '';
    }

    const date = new Date(value);

    const year = date.getFullYear().toString().substr(-2);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    month = (month < 10 ? '0' : '') + month;
    day = (day < 10 ? '0' : '') + day;
    hour = (hour < 10 ? '0' : '') + hour;
    min = (min < 10 ? '0' : '') + min;
    sec = (sec < 10 ? '0' : '') + sec.toFixed();

    return time ? `${month}/${day}/${year} ${hour}:${min}:${sec}` : `${month}/${day}/${year}`;
};

export const dateDiffInDays = (a, b) => {
    const MS_PER_DAY = 1000 * 60 * 60 * 24;
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / MS_PER_DAY);
};

export const toEasternDateTimeString = (date = new Date()) => {
    return date.toLocaleString('en-US', {
        timeZone: 'America/New_York',
        dateStyle: 'full',
        timeStyle: 'full',
    });
};

export const getDateStringXDaysAgo = (numOfDays, date = new Date(), forInput = false) => {
    const daysAgo = new Date(date.getTime());
    daysAgo.setDate(date.getDate() - numOfDays);

    return !forInput
        ? `${daysAgo.getMonth() + 1}/${daysAgo.getDate()}/${daysAgo.getFullYear().toString().substr(-2)}`
        : `${('0' + (daysAgo.getMonth() + 1)).slice(-2)}-${('0' + daysAgo.getDate()).slice(-2)}-${daysAgo
            .getFullYear()
            .toString()
            .substr(-2)}`;
};
