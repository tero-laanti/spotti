import MapView, { Marker } from 'react-native-maps';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

const testSpots = [
  { id: 1, latitude: 60.448, longitude: 22.289, title: 1 },
  { id: 2, latitude: 60.452, longitude: 22.286, title: 2 },
];

class SpotsMapPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: testSpots,
    };
  }

  render() {
    console.log(this.props.navigation)
    const { navigation } = this.props;
    const { markers } = this.state;

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: navigation.getParam('searchCoordinates').latitude,
            longitude: navigation.getParam('searchCoordinates').longitude,
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
      </View>
    );
  }
}

SpotsMapPage.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        searchCoordinates: PropTypes.shape({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
        }).isRequired,
      }),
    }),
  }).isRequired,
};

export default SpotsMapPage;
