import React, { useState, useEffect } from 'react';
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

const renderMarkers = (
  spots,
  currentActiveIndex,
  onActiveSpotChange,
  initialCoordinates,
  disableSearchLocationMarker
) => {
  const markers = spots.map((marker, index) => {
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
  });

  if (!disableSearchLocationMarker)
    markers.push(
      <Marker
        key={-1}
        coordinate={{
          latitude: initialCoordinates.latitude,
          longitude: initialCoordinates.longitude,
        }}
      />
    );

  return markers;
};

const SpotsMap = ({
  spots,
  initialCoordinates,
  disableSearchLocationMarker,
  setRef,
  onActiveSpotChange,
  currentActiveIndex,
  animateMapTo,
}) => {
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    if (mapReady) {
      setTimeout(() => animateMapTo(spots[0]), 1000);
    }
  }, [mapReady]);
  return (
    <MapView
      showsUserLocation
      style={styles.map}
      onLayout={() => setMapReady(true)}
      initialRegion={{
        latitude: initialCoordinates.latitude,
        longitude: initialCoordinates.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.015,
      }}
      ref={c => setRef(c)}
    >
      {mapReady &&
        renderMarkers(
          spots,
          currentActiveIndex,
          onActiveSpotChange,
          initialCoordinates,
          disableSearchLocationMarker
        )}
    </MapView>
  );
};

SpotsMap.propTypes = {
  initialCoordinates: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired,
  disableSearchLocationMarker: PropTypes.bool,
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
  animateMapTo: PropTypes.func.isRequired,
};

SpotsMap.defaultProps = {
  disableSearchLocationMarker: false,
};

export default SpotsMap;
