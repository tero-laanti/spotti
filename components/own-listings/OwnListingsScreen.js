import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import OwnListing from './OwnListing';
import { SPOTS } from '../mock-data';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

const OwnListingsScreen = () => (
  <View style={styles.container}>
    <View>
      {SPOTS.map(spot => (
        <OwnListing key={spot.id} spot={spot} handleSuggestionSelect={() => {}} />
      ))}
    </View>
    <Button title="Add Listing" />
  </View>
);

export default OwnListingsScreen;
