import React from 'react';
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

const TimeIntervalPicker = ({ timeInterval: { start, end }, updateTimeInterval }) => {
  const updateStartTime = updatedTime => updateTimeInterval({ start: updatedTime, end });
  const updateEndTime = updatedTime => updateTimeInterval({ start, end: updatedTime });

  return (
    <View>
      <TimePicker
        initialHour={start.hour}
        initialMinute={start.minute}
        updateTime={updateStartTime}
      />
      <TimePicker initialHour={end.hour} initialMinute={end.minute} updateTime={updateEndTime} />
    </View>
  );
};

TimeIntervalPicker.propTypes = {
  timeInterval: PropTypes.shape({
    start: PropTypes.shape({
      hour: PropTypes.number,
      minute: PropTypes.number,
    }).isRequired,
    end: PropTypes.shape({
      hour: PropTypes.number,
      minute: PropTypes.number,
    }).isRequired,
  }).isRequired,
  updateTimeInterval: PropTypes.func.isRequired,
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
