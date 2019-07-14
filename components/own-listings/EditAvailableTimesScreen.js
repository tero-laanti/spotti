import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CalendarDatePicker from '../calendar-date-picker/CalendarDatePicker';
import TimeIntervalPicker from '../time-interval-picker/TimeIntervalPicker';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

const availableTimes = {
  '2019-07-20': { start: { hour: 12, minute: 15 }, end: { hour: 13, minute: 45 } },
  '2019-07-22': { start: { hour: 16, minute: 0 }, end: { hour: 17, minute: 0 } },
  '2019-08-20': { start: { hour: 12, minute: 15 }, end: { hour: 13, minute: 45 } },
};

const datesWithAvailableTimesInMonth = ((month = 7) =>
  Object.keys(availableTimes)
    .filter(date => parseInt(date.split('-')[1], 10) === month)
    .map(date => parseInt(date.split('-')[2], 10)))();

const EditAvailableTimesScreen = () => {
  const currentDateAsISOString = new Date().toISOString();
  const [activeDate, setActiveDate] = useState(currentDateAsISOString.split('T')[0]);
  const [editedAvailableTimes, setEditedAvailableTimes] = useState({});

  const updateAvailableTimes = updatedTimes =>
    setEditedAvailableTimes({ ...editedAvailableTimes, [activeDate]: updatedTimes });

  const handleCalendarDateClick = date => setActiveDate(`2019-07-${date}`);

  return (
    <View style={styles.container}>
      <CalendarDatePicker
        activeDate={parseInt(activeDate.split('-')[2], 10)}
        handleCalendarDateClick={handleCalendarDateClick}
        datesWithAvailableTimes={datesWithAvailableTimesInMonth}
      />
      <TimeIntervalPicker
        timeInterval={
          editedAvailableTimes[activeDate] || availableTimes[activeDate] || { start: {}, end: {} }
        }
        updateTimeInterval={updateAvailableTimes}
      />
    </View>
  );
};

export default EditAvailableTimesScreen;
