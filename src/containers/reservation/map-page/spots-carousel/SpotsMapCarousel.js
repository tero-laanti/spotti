import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../../../Theme';
import Carousel from 'react-native-snap-carousel';
import PropTypes from 'prop-types';
import SpotsMapCarouselItem from './SpotsMapCarouselItem';

const styles = StyleSheet.create({
  carousel: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: `${colors.primary}AA`,
  },
});

const { width: viewportWidth } = Dimensions.get('window');
const itemWidth = viewportWidth * 0.75;

const SpotsMapCarousel = ({ navigation, spots, setRef, onActiveSpotChange }) => {
  const renderItem = ({ item }) => (
    <SpotsMapCarouselItem
      navigation={navigation}
      spot={item}
      timeFilters={{ time: '18:10-20:15', date: '25/10/2019' }}
    />
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
  navigation: PropTypes.shape({}).isRequired,
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
};

export default SpotsMapCarousel;
