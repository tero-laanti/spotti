import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import PropTypes from 'prop-types';
import colors from '../../../../Theme';
import SpotsMapCarouselItem from './SpotsMapCarouselItem';

const styles = StyleSheet.create({
  carousel: {
    height: 75,
    position: 'absolute',
    bottom: 0,
    backgroundColor: `${colors.primary}AA`,
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
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      imageUrls: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      description: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      distance: PropTypes.string.isRequired,
    })
  ).isRequired,
  setRef: PropTypes.func.isRequired,
  onActiveSpotChange: PropTypes.func.isRequired,
  showSpotInfoOfActiveSpot: PropTypes.func.isRequired,
};

export default SpotsMapCarousel;
