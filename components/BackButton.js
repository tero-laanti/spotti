import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  separator: {
    borderBottomColor: '#B4B4B4',
    borderBottomWidth: 1,
  },
});

const BackButton = ({ navigation }) => (
  <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
    <View>
      <Icon name="arrow-left" size={30} color="#B4B4B4" style={styles.icon} />
    </View>
  </TouchableWithoutFeedback>
);

BackButton.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default BackButton;