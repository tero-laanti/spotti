import { getCalendarWeeks } from './CalendarDatePicker';

const fourWeeks = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26, 27, 28],
];
const fiveWeeksWithIncompleteLastWeek = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26, 27, 28],
  [29, 30],
];
const fiveWeeksWithIncompleteFirstWeek = [
  [1, 2, 3],
  [4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30, 31],
];
const fiveWeeksWithIncompleteFirstAndLastWeeks = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30],
];
const sixWeeksWithIncompleteFirstAndLastWeeks = [
  [1],
  [2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20, 21, 22],
  [23, 24, 25, 26, 27, 28, 29],
  [30, 31],
];

describe('getCalendarWeeks', () => {
  it('should calculate weeks correctly when month starts on Monday and has exactly four weeks', () => {
    expect(getCalendarWeeks(0, 28)).toEqual(fourWeeks);
  });

  it('should calculate weeks correctly when month starts on Monday and has more than four weeks', () => {
    expect(getCalendarWeeks(0, 30)).toEqual(fiveWeeksWithIncompleteLastWeek);
  });

  it('should calculate weeks correctly when month ends on Sunday and has more than four weeks', () => {
    expect(getCalendarWeeks(4, 31)).toEqual(fiveWeeksWithIncompleteFirstWeek);
  });

  it('should calculate weeks correctly when month spreads over five calendar weeks', () => {
    expect(getCalendarWeeks(2, 30)).toEqual(fiveWeeksWithIncompleteFirstAndLastWeeks);
  });

  it('should calculate weeks correctly when month spreads over six calendar weeks', () => {
    expect(getCalendarWeeks(6, 31)).toEqual(sixWeeksWithIncompleteFirstAndLastWeeks);
  });
});
