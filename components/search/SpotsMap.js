import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  map: {
    height: '90%',
    width: '100%',
  },
});

const SpotsMap = ({ markers, initialCoordinates }) => {
  const [mapReady, setMapReady] = useState(false);

  return (
    <MapView
      style={styles.map}
      onLayout={() => setMapReady(true)}
      initialRegion={{
        latitude: initialCoordinates.latitude,
        longitude: initialCoordinates.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      {mapReady &&
        markers.map(marker => (
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
