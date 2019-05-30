import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, TextInput, StyleSheet, Text } from 'react-native';
import SpotsMapPage from "./SpotsMapPage";

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#cfffe5',
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: 'center',
    elevation: 5,
  },
  textInput: {
    width: '60%',
    borderColor: 'black',
    borderWidth: 1,
  },
  buttonContainer: {
    width: '20%',
    marginTop: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const coordinates = {
  latitude: 60.45,
  longitude: 22.29,
};

const Search = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = text => setSearchInput(text);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={searchInput}
        onChangeText={handleSearchInputChange}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SpotsMapPage', { coordinates })}
        >
          <Text>SEARCH</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Search.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default Search;
