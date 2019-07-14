import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CalendarDatePicker from '../calendar-date-picker/CalendarDatePicker';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

const availableTimes = {
  '2019-07-20': { startTime: { hour: 12, minute: 15 }, endTime: { hour: 13, minute: 45 } },
  '2019-07-22': { startTime: { hour: 16, minute: 0 }, endTime: { hour: 17, minute: 0 } },
  '2019-08-20': { startTime: { hour: 12, minute: 15 }, endTime: { hour: 13, minute: 45 } },
};

const datesWithAvailableTimesInMonth = ((month = 7) =>
  Object.keys(availableTimes)
    .filter(date => parseInt(date.split('-')[1], 10) === month)
    .map(date => parseInt(date.split('-')[2], 10)))();

const EditAvailableTimesScreen = () => {
  const [activeDate, setActiveDate] = useState(new Date().toISOString().split('T')[0]);

  const handleCalendarDateClick = date => setActiveDate(`2019-07-${date}`);

  return (
    <View style={styles.container}>
      <CalendarDatePicker
        activeDate={parseInt(activeDate.split('-')[2], 10)}
        handleCalendarDateClick={handleCalendarDateClick}
        datesWithAvailableTimes={datesWithAvailableTimesInMonth}
      />
    </View>
  );
};

export default EditAvailableTimesScreen;
