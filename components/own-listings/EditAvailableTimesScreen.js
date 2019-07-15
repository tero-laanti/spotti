import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import CalendarDatePicker from '../calendar-date-picker/CalendarDatePicker';
import TimeIntervalPicker from '../time-interval-picker/TimeIntervalPicker';
import { updateSpot } from '../spotsReducer';

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

const EditAvailableTimesScreen = ({
  navigation,
  navigation: {
    state: {
      params: { spot, index },
    },
  },
  // eslint-disable-next-line no-shadow
  updateSpot,
}) => {
  const currentDateAsISOString = new Date().toISOString();
  const [activeDate, setActiveDate] = useState(currentDateAsISOString.split('T')[0]);
  const [availableTimes, setAvailableTimes] = useState({});

  const deepCloneAvailableTimes = () => {
    const entries = Object.entries(spot.availableTimes);
    return entries.reduce((acc, current) => {
      acc[current[0]] = { start: { ...current[1].start }, end: { ...current[1].end } };
      return acc;
    }, {});
  };

  useEffect(() => setAvailableTimes(deepCloneAvailableTimes), [spot]);

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

  const finishAvailableTimesEditing = () => {
    updateSpot({ ...spot, availableTimes }, index);
    navigation.goBack();
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
      <TouchableOpacity onPress={finishAvailableTimesEditing}>
        <View style={styles.button}>
          <Text style={{ textAlign: 'center' }}>Done</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

EditAvailableTimesScreen.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        spot: PropTypes.shape({}).isRequired,
        index: PropTypes.number.isRequired,
      }),
    }),
  }).isRequired,
  updateSpot: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  updateSpot,
};

export default connect(
  null,
  mapDispatchToProps
)(EditAvailableTimesScreen);
