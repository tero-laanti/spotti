import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import CalendarDatePicker from '../calendar-date-picker/CalendarDatePicker';
import TimeIntervalPicker from '../time-interval-picker/TimeIntervalPicker';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    padding: 10,
    margin: 10,
  },
});

const initialAvailableTimes = {
  '2019-07-20': { start: { hour: 12, minute: 15 }, end: { hour: 13, minute: 45 } },
  '2019-07-22': { start: { hour: 16, minute: 0 }, end: { hour: 17, minute: 0 } },
};

const deepCloneAvailableTimes = () => {
  const entries = Object.entries(initialAvailableTimes);
  return entries.reduce((acc, current) => {
    acc[current[0]] = { start: { ...current[1].start }, end: { ...current[1].end } };
    return acc;
  }, {});
};

const EditAvailableTimesScreen = () => {
  const currentDateAsISOString = new Date().toISOString();
  const [activeDate, setActiveDate] = useState(currentDateAsISOString.split('T')[0]);
  const [availableTimes, setAvailableTimes] = useState(deepCloneAvailableTimes());

  const updateAvailableTimes = updatedTimes =>
    setAvailableTimes({ ...availableTimes, [activeDate]: updatedTimes });

  const getDatesWithAvailableTimesInMonth = (month = 7) =>
    Object.keys(availableTimes)
      .filter(date => parseInt(date.split('-')[1], 10) === month)
      .map(date => parseInt(date.split('-')[2], 10));

  const clearTimeIntervalOfActiveDate = () => {
    if (!availableTimes[activeDate]) return;
    const entries = Object.entries(availableTimes);
    const filteredTimes = entries.reduce((acc, current) => {
      if (current[0] !== activeDate)
        acc[current[0]] = { start: { ...current[1].start }, end: { ...current[1].end } };
      return acc;
    }, {});
    setAvailableTimes(filteredTimes);
  };

  const handleCalendarDateClick = date => setActiveDate(`2019-07-${date}`);

  return (
    <View style={styles.container}>
      <CalendarDatePicker
        activeDate={parseInt(activeDate.split('-')[2], 10)}
        handleCalendarDateClick={handleCalendarDateClick}
        datesWithAvailableTimes={getDatesWithAvailableTimesInMonth()}
      />
      <TimeIntervalPicker
        timeInterval={availableTimes[activeDate] || { start: {}, end: {} }}
        setInterval={updateAvailableTimes}
      />
      <TouchableOpacity onPress={clearTimeIntervalOfActiveDate}>
        <View style={styles.button}>
          <Text style={{ textAlign: 'center' }}>Clear date</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default EditAvailableTimesScreen;
