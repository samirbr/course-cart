import Months from './Months';
import DaysOfWeek from './DaysOfWeek';

export function dateFormat(isoDate: Date | string): string {
  let d: Date = (isoDate instanceof Date) ? isoDate : new Date(isoDate);

  return [
    DaysOfWeek[d.getDay()],
    Months[d.getMonth()],
    d.getDate(),
    d.getFullYear()
  ].join(' ');
}

export function plural(count: number, none: string, one: string, many: string) {
  return count === 1 ? `${count} ${one}` : (
    count > 1 ? `${count} ${many}` : none
  );
}

