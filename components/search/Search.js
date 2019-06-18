import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: '60%',
    borderColor: 'black',
    borderWidth: 1,
    height: '10%',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Search = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableWithoutFeedback onPress={() => navigation.navigate('SearchInput')}>
      <View style={styles.button} />
    </TouchableWithoutFeedback>
  </View>
);

Search.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default Search;
