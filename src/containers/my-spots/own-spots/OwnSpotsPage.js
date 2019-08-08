import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Button, StyleSheet } from 'react-native';
import OwnSpot from './OwnSpot';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

const OwnSpotsPage = ({ navigation, spots }) => {
  const handleSpotSelect = (spot, index) => () =>
    navigation.navigate('EditSpotPage', { spot, index });

  return (
    <View style={styles.container}>
      <View>
        {spots.map((spot, index) => (
          <OwnSpot key={spot.id} spot={spot} handleSpotSelect={handleSpotSelect(spot, index)} />
        ))}
      </View>
      <Button
        title="Add Spot"
        onPress={() => navigation.navigate('AddSpotWizard', { navigation })}
      />
    </View>
  );
};

OwnSpotsPage.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

OwnSpotsPage.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  spots: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = state => ({
  spots: state.spots,
});

export default connect(
  mapStateToProps,
  null
)(OwnSpotsPage);
