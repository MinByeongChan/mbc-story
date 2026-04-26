import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localeData from 'dayjs/plugin/localeData';

import 'dayjs/locale/ko';

dayjs.extend(customParseFormat);
dayjs.extend(localeData);

export const parseStrict = (input: string, format: string): Date | null => {
  const parsed = dayjs(input, format, true);

  return parsed.isValid() ? parsed.toDate() : null;
};

export const formatDate = (date: Date, format: string, locale = 'ko'): string => {
  return dayjs(date).locale(locale).format(format);
};

export const isSameDay = (a: Date, b: Date): boolean => {
  return dayjs(a).isSame(b, 'day');
};

export const isSameMonth = (a: Date, b: Date): boolean => {
  return dayjs(a).isSame(b, 'month');
};

export const startOfMonth = (date: Date): Date => {
  return dayjs(date).startOf('month').toDate();
};

export const addMonths = (date: Date, count: number): Date => {
  return dayjs(date).add(count, 'month').toDate();
};

export const addDays = (date: Date, count: number): Date => {
  return dayjs(date).add(count, 'day').toDate();
};

export const clampDate = (date: Date, min?: Date, max?: Date): Date => {
  const value = dayjs(date);

  if (min != null && value.isBefore(min, 'day')) {
    return dayjs(min).toDate();
  }

  if (max != null && value.isAfter(max, 'day')) {
    return dayjs(max).toDate();
  }

  return value.toDate();
};

export const buildMonthMatrix = ({
  visibleMonth,
  weekStartsOn,
}: {
  visibleMonth: Date;
  weekStartsOn: 0 | 1;
}): Date[][] => {
  const firstDayOfMonth = dayjs(startOfMonth(visibleMonth));
  const dayOffset = (firstDayOfMonth.day() - weekStartsOn + 7) % 7;
  const gridStart = firstDayOfMonth.subtract(dayOffset, 'day');

  return Array.from({ length: 6 }, (_, weekIndex) =>
    Array.from({ length: 7 }, (_day, dayIndex) =>
      gridStart.add(weekIndex * 7 + dayIndex, 'day').toDate(),
    ),
  );
};
