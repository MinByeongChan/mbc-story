import { describe, expect, it } from 'vitest';

import {
  addDays,
  addMonths,
  buildMonthMatrix,
  clampDate,
  formatDate,
  isSameDay,
  isSameMonth,
  parseStrict,
  startOfMonth,
} from '@gocheok/components/forms/datepicker/utils/date';

describe('datepicker date utils', () => {
  it('parses a valid date with strict format', () => {
    const parsed = parseStrict('2026-04-26', 'YYYY-MM-DD');

    expect(parsed).toEqual(new Date(2026, 3, 26));
  });

  it('returns null for invalid strict input', () => {
    expect(parseStrict('2026-13-01', 'YYYY-MM-DD')).toBeNull();
    expect(parseStrict('2026-4-26', 'YYYY-MM-DD')).toBeNull();
  });

  it('formats a date with locale', () => {
    expect(formatDate(new Date(2026, 3, 26), 'YYYY-MM-DD', 'ko')).toBe('2026-04-26');
  });

  it('compares dates by day and month', () => {
    expect(isSameDay(new Date(2026, 3, 26, 9), new Date(2026, 3, 26, 18))).toBe(true);
    expect(isSameDay(new Date(2026, 3, 26), new Date(2026, 3, 27))).toBe(false);
    expect(isSameMonth(new Date(2026, 3, 1), new Date(2026, 3, 30))).toBe(true);
  });

  it('moves dates by month and day', () => {
    expect(startOfMonth(new Date(2026, 3, 26))).toEqual(new Date(2026, 3, 1));
    expect(addMonths(new Date(2026, 3, 26), 1)).toEqual(new Date(2026, 4, 26));
    expect(addDays(new Date(2026, 3, 26), -7)).toEqual(new Date(2026, 3, 19));
  });

  it('clamps dates to min and max by day', () => {
    const min = new Date(2026, 3, 10);
    const max = new Date(2026, 3, 20);

    expect(clampDate(new Date(2026, 3, 1), min, max)).toEqual(min);
    expect(clampDate(new Date(2026, 3, 30), min, max)).toEqual(max);
    expect(clampDate(new Date(2026, 3, 15), min, max)).toEqual(new Date(2026, 3, 15));
  });

  it('builds a 6 by 7 month matrix with sunday start', () => {
    const matrix = buildMonthMatrix({
      visibleMonth: new Date(2026, 3, 26),
      weekStartsOn: 0,
    });

    expect(matrix).toHaveLength(6);
    expect(matrix.every((week) => week.length === 7)).toBe(true);
    expect(matrix[0][0]).toEqual(new Date(2026, 2, 29));
    expect(matrix[5][6]).toEqual(new Date(2026, 4, 9));
  });

  it('builds a month matrix with monday start', () => {
    const matrix = buildMonthMatrix({
      visibleMonth: new Date(2026, 3, 26),
      weekStartsOn: 1,
    });

    expect(matrix[0][0]).toEqual(new Date(2026, 2, 30));
    expect(matrix[5][6]).toEqual(new Date(2026, 4, 10));
  });
});
