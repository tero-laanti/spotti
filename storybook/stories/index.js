/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CalendarDatePicker from '../../components/calendar-date-picker/CalendarDatePicker';

const props = {
  activeDate: 1,
  handleCalendarDateClick: () => {},
  datesWithAvailableTimes: [2, 3],
};

storiesOf('CalendarDatePicker', module).add('default view', () => (
  <CalendarDatePicker {...props} />
));
