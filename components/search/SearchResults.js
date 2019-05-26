import React from 'react';
import PropTypes from 'prop-types';
import { View, Button } from 'react-native';

const SearchResults = ({ navigation }) => (
  <View>
    <Button title="Check out Spot" onPress={() => navigation.navigate('SpotInfo')} />
  </View>
);

SearchResults.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default SearchResults;
