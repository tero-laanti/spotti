import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%',
    zIndex: -1,
  },
});

const SpotsMap = ({
  spots,
  initialCoordinates,
  setRef,
  onActiveSpotChange,
  currentActiveIndex,
}) => {
  const [mapReady, setMapReady] = useState(false);

  return (
    <MapView
      showsUserLocation
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
        spots
          .map((marker, index) => {
            const isActive = index === currentActiveIndex;
            return (
              <Marker
                key={`${marker.id}${isActive}`} // workaround for https://github.com/react-native-community/react-native-maps/issues/1611
                pinColor="blue"
                opacity={isActive ? 1 : 0.5}
                onPress={() => onActiveSpotChange(index)}
                coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
              />
            );
          })
          .concat(
            <Marker
              key={-1}
              coordinate={{
                latitude: initialCoordinates.latitude,
                longitude: initialCoordinates.longitude,
              }}
            />
          )}
    </MapView>
  );
};

SpotsMap.propTypes = {
  initialCoordinates: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired,
  spots: PropTypes.arrayOf(
    PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  setRef: PropTypes.func.isRequired,
  onActiveSpotChange: PropTypes.func.isRequired,
  currentActiveIndex: PropTypes.number.isRequired,
};

export default SpotsMap;
