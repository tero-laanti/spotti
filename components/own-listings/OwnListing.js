import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  suggestionBox: {
    height: 50,
    display: 'flex',
    justifyContent: 'center',
  },
  separator: {
    borderBottomColor: '#B4B4B4',
    borderBottomWidth: 1,
  },
});

const OwnListing = ({ spot, handleListingSelect }) => (
  <View style={styles.separator}>
    <TouchableOpacity onPress={handleListingSelect}>
      <View style={styles.suggestionBox}>
        <Text>{spot.address}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

OwnListing.propTypes = {
  spot: PropTypes.shape({}).isRequired,
  handleListingSelect: PropTypes.func.isRequired,
};

export default OwnListing;
