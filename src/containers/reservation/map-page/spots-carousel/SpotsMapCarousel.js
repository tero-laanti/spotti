import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import PropTypes from 'prop-types';
import colors from '../../../../Theme';
import SpotsMapCarouselItem from './SpotsMapCarouselItem';
import { filtersHeight } from '../map-filters/MapFiltersContainer';

const styles = StyleSheet.create({
  carousel: {
    height: 75,
    position: 'absolute',
    bottom: filtersHeight,
    backgroundColor: `${colors.primary}00`,
  },
});

const { width: viewportWidth } = Dimensions.get('window');
const itemWidth = viewportWidth * 0.75;

const SpotsMapCarousel = ({ spots, setRef, onActiveSpotChange, showSpotInfoOfActiveSpot }) => {
  const renderItem = ({ item }) => (
    <SpotsMapCarouselItem showSpotInfoOfActiveSpot={showSpotInfoOfActiveSpot} spot={item} />
  );

  renderItem.propTypes = {
    item: PropTypes.shape({
      title: PropTypes.string,
    }).isRequired,
  };

  return (
    <Carousel
      data={spots}
      renderItem={renderItem}
      sliderWidth={viewportWidth}
      inactiveSlideOpacity={0.75}
      itemWidth={itemWidth}
      ref={c => setRef(c)}
      onSnapToItem={index => onActiveSpotChange(index)}
      containerCustomStyle={styles.carousel}
    />
  );
};

SpotsMapCarousel.propTypes = {
  spots: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      coordinates: PropTypes.shape().isRequired,
      description: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      distance: PropTypes.number.isRequired,
    })
  ).isRequired,
  setRef: PropTypes.func.isRequired,
  onActiveSpotChange: PropTypes.func.isRequired,
  showSpotInfoOfActiveSpot: PropTypes.func.isRequired,
};

export default SpotsMapCarousel;
