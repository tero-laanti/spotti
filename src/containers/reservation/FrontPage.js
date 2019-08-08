import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  button: {
    width: '60%',
    borderColor: 'black',
    borderWidth: 1,
    height: '10%',
    justifyContent: 'center',
    padding: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const FrontPage = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableWithoutFeedback onPress={() => navigation.navigate('SearchPage')}>
      <View style={styles.button}>
        <Icon name="search" size={30} color="#B4B4B4" />
      </View>
    </TouchableWithoutFeedback>
  </View>
);

FrontPage.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default FrontPage;
