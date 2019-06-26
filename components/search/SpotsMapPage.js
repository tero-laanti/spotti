import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import SpotsMap from './SpotsMap';
import SpotsMapCarousel from './SpotsMapCarousel';

const testSpots = [
  { id: 1, latitude: 60.448, longitude: 22.289, title: 'Spot 1' },
  { id: 2, latitude: 60.452, longitude: 22.286, title: 'Spot 2' },
  { id: 3, latitude: 60.451, longitude: 22.288, title: 'Spot 3' },
];

class SpotsMapPage extends React.Component {
  constructor(props) {
    super(props);
    this.carouselRef = React.createRef();
    this.mapRef = React.createRef();
    this.state = {};
  }

  setMapRef = c => {
    this.mapRef = c;
  };

  setCarouselRef = c => {
    this.carouselRef = c;
  };

  centerMapOnSpotIndex = i => {
    const spotToCenter = testSpots[i];
    this.mapRef.animateCamera({
      center: { latitude: spotToCenter.latitude, longitude: spotToCenter.longitude },
    });
  };

  snapCarouselToSpotIndex = i => this.carouselRef.snapToItem(i);

  render() {
    const {
      navigation: {
        state: {
          params: { searchCoordinates: initialCoordinates },
        },
      },
    } = this.props;
    return (
      <View>
        <SpotsMap
          onActiveSpotChange={this.snapCarouselToSpotIndex}
          markers={testSpots}
          initialCoordinates={initialCoordinates}
          setRef={this.setMapRef}
        />
        <SpotsMapCarousel
          onActiveSpotChange={this.centerMapOnSpotIndex}
          spots={testSpots}
          setRef={this.setCarouselRef}
        />
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
