import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, StyleSheet } from 'react-native';
import OwnListing from './OwnListing';
import { SPOTS } from '../mock-data';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

const OwnListingsScreen = ({ navigation }) => {
  const handleListingSelect = spot => () => navigation.navigate('EditListingScreen', { spot });

  return (
    <View style={styles.container}>
      <View>
        {SPOTS.map(spot => (
          <OwnListing key={spot.id} spot={spot} handleListingSelect={handleListingSelect(spot)} />
        ))}
      </View>
      <Button
        title="Add Listing"
        onPress={() => navigation.navigate('AddSpotWizard', { navigation })}
      />
    </View>
  );
};

OwnListingsScreen.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

OwnListingsScreen.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default OwnListingsScreen;
