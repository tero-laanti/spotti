import React from 'react';
import * as R from 'ramda';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
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
    flex: 1,
    borderWidth: 1,
    justifyContent: 'center',
    width: Dimensions.get('window').width / 7,
  },
  activeCalendarDate: {
    backgroundColor: '#3A6EA5',
  },
  calendarDateWithAvailableTimes: {
    backgroundColor: '#A5BDD6',
  },
});

export const getCalendarWeeks = (firstWeekdayOfMonth, lastDayOfCurrentMonth) => {
  const firstWeekDateCount = 7 - firstWeekdayOfMonth;
  const daysOfMonth = R.range(1, lastDayOfCurrentMonth + 1);
  return R.compose(
    R.unnest(),
    R.map(R.splitEvery(7)),
    R.splitWhen(day => day > firstWeekDateCount)
  )(daysOfMonth);
};

const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const CalendarDatePicker = ({ activeDate, handleCalendarDateClick, datesWithAvailableTimes }) => {
  const getLastDateOfMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();
  const shiftDaysToStartFromMonday = dayNumber => R.mathMod(dayNumber - 1, 7);
  const currentDateObject = new Date();
  const currentMonth = currentDateObject.getMonth();
  const currentYear = currentDateObject.getFullYear();
  const lastDateOfCurrentMonth = getLastDateOfMonth(currentYear, currentMonth);
  const firstWeekdayOfMonth = shiftDaysToStartFromMonday(
    getFirstDayOfMonth(currentYear, currentMonth)
  );

  const calendarWeeks = getCalendarWeeks(firstWeekdayOfMonth, lastDateOfCurrentMonth);

  return (
    <View>
      <View style={styles.dateNamesHeader}>
        {weekdays.map(dayOfWeek => (
          <Text key={dayOfWeek}>{dayOfWeek}</Text>
        ))}
      </View>
      <View>
        {calendarWeeks.map(week => (
          <CalendarRow
            key={week[0]}
            isFirstWeek={week[0] === 1}
            week={week}
            activeDate={activeDate}
            handleCalendarDateClick={handleCalendarDateClick}
            datesWithAvailableTimes={datesWithAvailableTimes}
          />
        ))}
      </View>
    </View>
  );
};

CalendarDatePicker.propTypes = {
  activeDate: PropTypes.number.isRequired,
  handleCalendarDateClick: PropTypes.func.isRequired,
  datesWithAvailableTimes: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

const CalendarRow = ({
  isFirstWeek,
  week,
  activeDate,
  handleCalendarDateClick,
  datesWithAvailableTimes,
}) => (
  <View style={[isFirstWeek ? styles.firstCalendarRow : styles.calendarRow]}>
    {week.map(date => (
      <CalendarDate
        key={date}
        date={date}
        isActive={date === activeDate}
        hasAvailableTimes={datesWithAvailableTimes.includes(date)}
        handleCalendarDateClick={handleCalendarDateClick}
      />
    ))}
  </View>
);

CalendarRow.propTypes = {
  isFirstWeek: PropTypes.bool.isRequired,
  week: PropTypes.arrayOf(PropTypes.number).isRequired,
  activeDate: PropTypes.number.isRequired,
  handleCalendarDateClick: PropTypes.func.isRequired,
  datesWithAvailableTimes: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

const CalendarDate = ({ date, isActive, hasAvailableTimes, handleCalendarDateClick }) => (
  <TouchableOpacity style={{ flex: 1 }} onPress={() => handleCalendarDateClick(date)}>
    <View
      style={[
        styles.calendarDate,
        isActive && styles.activeCalendarDate,
        !isActive && hasAvailableTimes && styles.calendarDateWithAvailableTimes,
      ]}
    >
      <Text style={{ textAlign: 'center' }}>{date}</Text>
    </View>
  </TouchableOpacity>
);

CalendarDate.propTypes = {
  date: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  hasAvailableTimes: PropTypes.bool.isRequired,
  handleCalendarDateClick: PropTypes.func.isRequired,
};

export default CalendarDatePicker;
