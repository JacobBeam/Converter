import dayjs from 'dayjs';

export const dateMax = dayjs().format(`YYYY-MM-DD`);
export const dateMin = dayjs().subtract(7, 'day').format(`YYYY-MM-DD`);
