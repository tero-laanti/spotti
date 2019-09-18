import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Button, StyleSheet } from 'react-native';
import OwnSpot from './OwnSpot';
import routes from '../routes';
import { getSpotsByOwnerId } from '../../../Api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

const OwnSpotsPage = ({ navigation, id }) => {
  const [spots, setSpots] = useState([]);

  function saveSpotsToState(ownerId) {
    console.log(id);
    getSpotsByOwnerId(ownerId).then(result => setSpots(result.data));
  }
  useEffect(async () => {
    alert(`Using owner id of ${id}`);
    saveSpotsToState(id);
  }, []);

  const handleSpotSelect = (spot, index) => () =>
    navigation.navigate(routes.editSpot, { spot, index });

  console.log(spots);
  return (
    <View style={styles.container}>
      <View>
        {spots.map((spot, index) => (
          <OwnSpot key={spot.id} spot={spot} handleSpotSelect={handleSpotSelect(spot, index)} />
        ))}
      </View>
      <Button
        title="Add Spot"
        onPress={() => navigation.navigate(routes.addSpotWizard, { navigation })}
      />
    </View>
  );
};

OwnSpotsPage.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  id: PropTypes.number,
};

OwnSpotsPage.defaultProps = {
  id: 1,
};

const mapStateToProps = state => ({
  spots: state.spots,
});

export default connect(
  mapStateToProps,
  null
)(OwnSpotsPage);
