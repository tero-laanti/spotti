import React from 'react';
import PropTypes from 'prop-types';
import StepIndicator from 'react-native-step-indicator';

const CurrentPageIndicator = ({ currentIndex, pageLabels }) => (
  <StepIndicator currentPosition={currentIndex} onPress={() => {}} labels={pageLabels} />
);

CurrentPageIndicator.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  pageLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CurrentPageIndicator;
