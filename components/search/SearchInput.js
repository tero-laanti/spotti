import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { BaseButton } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    height: '10%',

    borderWidth: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
});

const coordinates = {
  latitude: 60.45,
  longitude: 22.29,
};

const SearchInput = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = text => setSearchInput(text);

  return (
    <View style={styles.container}>
      <BaseButton onPress={() => navigation.navigate('Search')}>
        <Text>Close</Text>
      </BaseButton>
      <TextInput
        style={styles.textInput}
        value={searchInput}
        onChangeText={handleSearchInputChange}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SpotsMapPage', { searchCoordinates: coordinates })}
      >
        <Text>SEARCH</Text>
      </TouchableOpacity>
    </View>
  );
};

SearchInput.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default SearchInput;
