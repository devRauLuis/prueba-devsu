import * as dayjs from 'dayjs';

export function formatToYYYYMMDD(date: string | Date | dayjs.Dayjs) {
  const dateFormat = 'YYYY-MM-DD';
  return dayjs(date).format(dateFormat);
}
