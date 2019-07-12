import React from 'react';
import PropTypes from 'prop-types';
import StepIndicator from 'react-native-step-indicator';

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013',
};

const CurrentPageIndicator = ({ currentIndex, pageLabels, setCurrentPage }) => (
  <StepIndicator
    customStyles={customStyles}
    currentPosition={currentIndex}
    onPress={index => setCurrentPage(index)}
    labels={pageLabels}
    stepCount={pageLabels.length}
  />
);

CurrentPageIndicator.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  pageLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default CurrentPageIndicator;
