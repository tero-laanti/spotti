import React, { useState } from 'react';
import { View, Text, TimePickerAndroid, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  timePicker: {
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    padding: 10,
    margin: 10,
  },
});

const TimeIntervalPicker = () => {
  const [startTime, setStartTime] = useState({});
  const [endTime, setEndTime] = useState({});
  return (
    <View>
      <TimePicker
        initialHour={startTime.hour}
        initialMinute={startTime.minute}
        updateTime={setStartTime}
      />
      <TimePicker
        initialHour={endTime.hour}
        initialMinute={endTime.minute}
        updateTime={setEndTime}
      />
    </View>
  );
};

const TimePicker = ({ initialHour, initialMinute, updateTime }) => {
  const openTimePicker = async () => {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: initialHour,
        minute: initialMinute,
        is24Hour: true,
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        updateTime({ hour, minute });
      }
    } catch ({ code, message }) {
      console.warn('Cannot open time picker', message);
    }
  };

  const getDisplayText = () => {
    if (initialHour < 0 && initialMinute < 0) {
      return '-- : --';
    }

    const hour = initialHour > 0 ? `${initialHour}` : '00';
    const minute = initialMinute > 9 ? `${initialMinute}` : `0${initialMinute}`;

    return `${hour}:${minute}`;
  };

  return (
    <TouchableWithoutFeedback onPress={openTimePicker}>
      <View style={styles.timePicker}>
        <Text style={{ textAlign: 'center' }}>{getDisplayText()}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

TimePicker.propTypes = {
  initialHour: PropTypes.number,
  initialMinute: PropTypes.number,
  updateTime: PropTypes.func.isRequired,
};

TimePicker.defaultProps = {
  initialHour: -1,
  initialMinute: -1,
};

export default TimeIntervalPicker;
