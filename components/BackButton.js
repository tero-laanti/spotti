import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

const BackButton = ({ onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View>
      <Icon name="arrow-left" size={30} color="#B4B4B4"/>
    </View>
  </TouchableWithoutFeedback>
);

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default BackButton;
