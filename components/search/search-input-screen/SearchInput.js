import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  textInput: {
    flexGrow: 1,
  },
  textInputBox: {
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  iconButton: {
    justifyContent: 'center',
  },
  icon: {
    margin: 10,
  },
});

const SearchInput = ({ handleGoBackClick, handleSearchInputChange, searchInput }) => (
  <View style={styles.textInputBox}>
    <TouchableWithoutFeedback onPress={handleGoBackClick}>
      <View style={styles.iconButton}>
        <Icon name="arrow-left" size={30} color="#B4B4B4" style={styles.icon} />
      </View>
    </TouchableWithoutFeedback>
    <TextInput
      style={styles.textInput}
      autoFocus
      value={searchInput}
      onChangeText={handleSearchInputChange}
    />
  </View>
);

SearchInput.propTypes = {
  handleGoBackClick: PropTypes.func.isRequired,
  handleSearchInputChange: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
};

export default SearchInput;
