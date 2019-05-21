import React from 'react';
import PropTypes from 'prop-types';
import { View, Button } from 'react-native';

const Search = ({ navigation }) => (
  <View>
    <Button title="Search" onPress={() => navigation.navigate('SearchResults')} />
  </View>
);

Search.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default Search;
