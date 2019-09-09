import React from 'react';
import PropTypes from 'prop-types';
import StepIndicator from 'react-native-step-indicator';
import colors from "../../../Theme";

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: colors.primary,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: colors.primary,
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: colors.primary,
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: colors.primary,
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: colors.primary,
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: colors.primary,
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
