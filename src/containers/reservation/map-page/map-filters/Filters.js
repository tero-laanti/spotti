import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import PropTypes from 'prop-types';
import BackButton from '../../../lib/BackButton';
import colors, { defaultDatetimeFormat } from '../../../../Theme';

const styles = StyleSheet.create({
  filterButtonsTopContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',
  },
  singleFilterContainer: {
    alignItems: 'center',
  },
  labelText: {
    color: 'silver',
  },
  timeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
});

const Filters = ({ to, from, onChange }) => {
  const [toDateTimePickerIsOpen, setToDateTimePickerOpen] = useState(false);
  const [fromDateTimePickerIsOpen, setFromDateTimePickerOpen] = useState(false);
  const handleDatePicked = (key, value) => {
    onChange(key, value);
    if (key === 'FromFilterValue') setFromDateTimePickerOpen(false);
    else setToDateTimePickerOpen(false);
  };

  const fromDateTime = defaultDatetimeFormat(from);
  const toDateTime = defaultDatetimeFormat(to);
  return (
    <View style={{ height: '100%', width: '100%' }}>
      <View style={styles.filterButtonsTopContainer}>
        <TouchableWithoutFeedback onPress={() => setFromDateTimePickerOpen(true)}>
          <View style={styles.singleFilterContainer}>
            <Text style={styles.labelText}>Mistä</Text>
            <Text>
              {fromDateTime.date} <Text style={styles.timeText}>{fromDateTime.time}</Text>
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <DateTimePicker
          minimumDate={new Date()}
          isVisible={fromDateTimePickerIsOpen}
          onConfirm={dateTime => handleDatePicked('FromFilterValue', dateTime)}
          onCancel={() => setFromDateTimePickerOpen(false)}
          minuteInterval={5}
          mode="datetime"
          is24Hour
        />
        <TouchableWithoutFeedback onPress={() => setToDateTimePickerOpen(true)}>
          <View style={styles.singleFilterContainer}>
            <Text style={styles.labelText}>Mihin</Text>
            <Text>
              {toDateTime.date} <Text style={styles.timeText}>{toDateTime.time}</Text>
            </Text>
          </View>
        </TouchableWithoutFeedback>

        <DateTimePicker
          minimumDate={from}
          isVisible={toDateTimePickerIsOpen}
          onConfirm={dateTime => handleDatePicked('ToFilterValue', dateTime)}
          onCancel={() => setToDateTimePickerOpen(false)}
          minuteInterval={5}
          mode="datetime"
          is24Hour
        />
      </View>
    </View>
  );
};

Filters.propTypes = {
  to: PropTypes.instanceOf(Date).isRequired,
  from: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filters;
