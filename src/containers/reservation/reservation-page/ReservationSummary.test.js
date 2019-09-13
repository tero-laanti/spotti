import React from 'react';
import renderer from 'react-test-renderer';
import ReservationSummary from './ReservationSummary';

describe('reservationSummary', () => {
  it('should return state by default', () => {
    const component = renderer.create(<ReservationSummary durationInHours={5} pricePerHour={1} />);

    console.log(JSON.stringify(component));
  });
});
