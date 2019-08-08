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

const SpotsMap = ({ markers, initialCoordinates, setRef, onActiveSpotChange }) => {
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
      ref={c => setRef(c)}
    >
      {mapReady &&
        markers.map((marker, index) => (
          <Marker
            key={marker.id}
            onPress={() => onActiveSpotChange(index)}
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
  setRef: PropTypes.func.isRequired,
  onActiveSpotChange: PropTypes.func.isRequired,
};

export default SpotsMap;
