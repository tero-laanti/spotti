import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TextInput } from 'react-native';
import BackButton from '../../lib/BackButton';

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

const SearchInput = ({
  handleGoBackClick,
  handleSearchInputChange,
  handleSearchClick,
  searchInput,
}) => (
  <View style={styles.textInputBox}>
    <BackButton onPress={handleGoBackClick} />
    <TextInput
      style={styles.textInput}
      autoFocus
      value={searchInput}
      onChangeText={handleSearchInputChange}
      onSubmitEditing={handleSearchClick}
      returnKeyType="search"
    />
  </View>
);

SearchInput.propTypes = {
  handleGoBackClick: PropTypes.func.isRequired,
  handleSearchInputChange: PropTypes.func.isRequired,
  handleSearchClick: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
};

export default SearchInput;
