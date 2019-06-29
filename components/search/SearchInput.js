import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
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

const coordinates = {
  latitude: 60.45,
  longitude: 22.29,
};

const SearchInput = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = text => setSearchInput(text);

  return (
    <View>
      <View style={styles.textInputBox}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Search')}>
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
