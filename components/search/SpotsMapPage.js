import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import SpotsMap from './SpotsMap';
import SpotsMapCarousel from "./SpotsMapCarousel";

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
    const {
      navigation: {
        state: {
          params: { searchCoordinates: initialCoordinates },
        },
      },
    } = this.props;
    const { markers } = this.state;

    return (
      <View style={styles.container}>
        <SpotsMap markers={markers} initialCoordinates={initialCoordinates} />
        <SpotsMapCarousel/>
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
