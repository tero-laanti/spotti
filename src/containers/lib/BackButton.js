import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

const BackButton = ({ onPress, color, size }) => (
  <TouchableWithoutFeedback onPress={() => onPress()}>
    <Icon name="arrow-left" size={size} color={color} style={{ padding: 10 }} />
  </TouchableWithoutFeedback>
);

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
};

BackButton.defaultProps = {
  color: '#B4B4B4',
  size: 30,
};

export default BackButton;
