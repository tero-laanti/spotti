import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import PropTypes from 'prop-types';
import BackButton from '../../../lib/BackButton';
import colors from '../../../../Theme';

const formatDateTime = dateTime => {
  const dateString = `${dateTime.getDate()}.${dateTime.getMonth() + 1}.`;
  const timeString = `${dateTime.getHours()}:${dateTime.getMinutes()}`;
  return `${dateString} ${timeString}`;
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
  },
  header: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    marginVertical: '2%',
    marginRight: 30,
  },
  changeFilterButton: {},
  filterButtonsTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

const Filters = ({ to, from, onChange, goBack }) => {
  const [toDateTimePickerIsOpen, setToDateTimePickerOpen] = useState(false);
  const [fromDateTimePickerIsOpen, setFromDateTimePickerOpen] = useState(false);
  const handleDatePicked = (key, value) => {
    onChange(key, value);
    if (key === 'FromFilterValue') setFromDateTimePickerOpen(false);
    else setToDateTimePickerOpen(false);
  };
  return (
    <View style={{ height: '100%', width: '100%' }}>
      <View style={styles.headerContainer}>
        <BackButton onPress={goBack} color={colors.dark} />
        <Text style={styles.header}>Set the time range of your parking.</Text>
      </View>
      <View style={styles.filterButtonsTopContainer}>
        <View>
          <Button
            style={styles.changeFilterButton}
            onPress={() => setFromDateTimePickerOpen(true)}
            title="From"
          />
          <Text>{formatDateTime(from)}</Text>
          <DateTimePicker
            minimumDate={new Date()}
            isVisible={fromDateTimePickerIsOpen}
            onConfirm={dateTime => handleDatePicked('FromFilterValue', dateTime)}
            onCancel={() => setFromDateTimePickerOpen(false)}
            minuteInterval={5}
            mode="datetime"
            is24Hour
          />
        </View>
        <View>
          <Button
            style={styles.changeFilterButton}
            onPress={() => setToDateTimePickerOpen(true)}
            title="To"
          />
          <Text>{formatDateTime(to)}</Text>
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
    </View>
  );
};

Filters.propTypes = {
  to: PropTypes.instanceOf(Date).isRequired,
  from: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};

export default Filters;
