import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  dateNamesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
  },
  calendarRow: {
    height: Dimensions.get('window').width / 7,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  firstCalendarRow: {
    height: Dimensions.get('window').width / 7,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  calendarDate: {
    borderWidth: 1,
    justifyContent: 'center',
    width: Dimensions.get('window').width / 7,
  },
});

const CalendarDatePicker = () => {
  const getLastDateOfMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();
  const shiftDaysToStartFromMonday = dayNumber => (((dayNumber - 1) % 7) + 7) % 7;
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const lastDateOfCurrentMonth = getLastDateOfMonth(currentYear, currentMonth);
  const firstDayOfMonth = shiftDaysToStartFromMonday(getFirstDayOfMonth(currentYear, currentMonth));

  const range = (start, stop) => {
    const a = [start];
    let b = start;
    while (b < stop) {
      a.push((b += 1));
    }
    return a;
  };

  const getCalendarWeeks = () => {
    const firstWeekDateCount = 7 - firstDayOfMonth;
    const weeks = [];
    weeks.push(range(1, firstWeekDateCount));
    weeks.push(range(firstWeekDateCount + 1, firstWeekDateCount + 7));
    weeks.push(range(firstWeekDateCount + 1 + 7, firstWeekDateCount + 7 + 7));
    weeks.push(range(firstWeekDateCount + 1 + 14, firstWeekDateCount + 7 + 14));
    if (weeks[3][6] !== lastDateOfCurrentMonth) {
      if (lastDateOfCurrentMonth - weeks[3][6] > 7) {
        weeks.push(range(firstWeekDateCount + 1 + 21, firstWeekDateCount + 7 + 21));
        weeks.push(range(firstWeekDateCount + 1 + 28, lastDateOfCurrentMonth));
      } else {
        weeks.push(range(firstWeekDateCount + 1 + 21, lastDateOfCurrentMonth));
      }
    }
    return weeks;
  };

  const calendarWeeks = getCalendarWeeks();

  return (
    <View style={styles.container}>
      <View style={styles.dateNamesHeader}>
        <Text>Mon</Text>
        <Text>Tue</Text>
        <Text>Wed</Text>
        <Text>Thu</Text>
        <Text>Fri</Text>
        <Text>Sat</Text>
        <Text>Sun</Text>
      </View>
      <View>
        {calendarWeeks.map(week => (
          <CalendarRow key={week[0]} isFirstWeek={week[0] === 1} week={week} />
        ))}
      </View>
    </View>
  );
};

const CalendarRow = ({ isFirstWeek, week }) => (
  <View style={[isFirstWeek ? styles.firstCalendarRow : styles.calendarRow]}>
    {week.map(date => (
      <CalendarDate key={date} date={date} />
    ))}
  </View>
);

CalendarRow.propTypes = {
  isFirstWeek: PropTypes.bool.isRequired,
  week: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const CalendarDate = ({ date }) => (
  <View style={[styles.calendarDate]}>
    <Text style={{ textAlign: 'center' }}>{date}</Text>
  </View>
);

CalendarDate.propTypes = {
  date: PropTypes.number.isRequired,
};

export default CalendarDatePicker;
