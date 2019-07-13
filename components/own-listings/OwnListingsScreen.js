import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Button, StyleSheet } from 'react-native';
import OwnListing from './OwnListing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

const OwnListingsScreen = ({ navigation, spots }) => {
  const handleListingSelect = (spot, index) => () =>
    navigation.navigate('EditListingScreen', { spot, index });

  return (
    <View style={styles.container}>
      <View>
        {spots.map((spot, index) => (
          <OwnListing
            key={spot.id}
            spot={spot}
            handleListingSelect={handleListingSelect(spot, index)}
          />
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
  spots: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = state => ({
  spots: state.spots,
});

export default connect(
  mapStateToProps,
  null
)(OwnListingsScreen);
