import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import SpotsMap from './spots-map/SpotsMap';
import SpotsMapCarousel from './spots-carousel/SpotsMapCarousel';
import MapFiltersContainer from './map-filters/MapFiltersContainer';

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
    const { spots } = this.props;
    const spotToCenter = spots[i];
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
      spots,
    } = this.props;
    return (
      <View>
        <MapFiltersContainer />
        <SpotsMap
          onActiveSpotChange={this.snapCarouselToSpotIndex}
          markers={spots}
          initialCoordinates={initialCoordinates}
          setRef={this.setMapRef}
        />
        <SpotsMapCarousel
          navigation={navigation}
          onActiveSpotChange={this.centerMapOnSpotIndex}
          spots={spots}
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
  spots: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = state => ({
  spots: state.spots,
});

export default connect(
  mapStateToProps,
  null
)(SpotsMapPage);
