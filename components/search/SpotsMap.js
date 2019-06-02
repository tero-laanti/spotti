import React from 'react';
import PropTypes from 'prop-types';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

const SpotsMap = ({ markers, initialCoordinates }) => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: initialCoordinates.latitude,
        longitude: initialCoordinates.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      {markers.map(marker => (
        <Marker
          key={marker.id}
          coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
        />
      ))}
    </MapView>
  );
};

SpotsMap.propTypes = {
  initialCoordinates: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired,
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default SpotsMap;
