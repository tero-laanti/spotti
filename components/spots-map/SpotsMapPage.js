import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import SpotsMap from './SpotsMap';
import SpotsMapCarousel from './carousel/SpotsMapCarousel';
import { SPOTS } from '../mock-data';

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
    const spotToCenter = SPOTS[i];
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
      navigation,
    } = this.props;
    return (
      <View>
        <SpotsMap
          onActiveSpotChange={this.snapCarouselToSpotIndex}
          markers={SPOTS}
          initialCoordinates={initialCoordinates}
          setRef={this.setMapRef}
        />
        <SpotsMapCarousel
          navigation={navigation}
          onActiveSpotChange={this.centerMapOnSpotIndex}
          spots={SPOTS}
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
