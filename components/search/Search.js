import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    width: '60%',
    borderColor: 'black',
    borderWidth: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Search = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        underlineColorAndroid="transparent"
        onTouchStart={() => navigation.navigate('SearchInput')}
      />
    </View>
  );
};

Search.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default Search;
