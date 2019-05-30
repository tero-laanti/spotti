import MapView, { Marker } from 'react-native-maps';

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

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

const testMarkers: Marker[] = [
  <Marker coordinate={{ latitude: 60.455, longitude: 22.295 }} />,
  <Marker coordinate={{ latitude: 60.453, longitude: 22.292 }} />,
];
class SpotsMapPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
    };
  }

  componentDidMount() {
    this.setState({ markers: testMarkers });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {this.state.markers.map(marker => marker)}
        </MapView>
      </View>
    );
  }
}

export default SpotsMapPage;
