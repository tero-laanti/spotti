import React from 'react';
import Carousel from 'react-native-snap-carousel';
import PropTypes from 'prop-types';
import SpotsMapCarouselItem from './SpotsMapCarouselItem';

const SpotsMapCarousel = ({ navigation, spots, setRef, onActiveSpotChange }) => {
  const renderItem = ({ item }) => <SpotsMapCarouselItem navigation={navigation} spot={item} />;

  renderItem.propTypes = {
    item: PropTypes.shape({
      title: PropTypes.string,
    }).isRequired,
  };

  return (
    <Carousel
      data={spots}
      renderItem={renderItem}
      sliderWidth={400}
      itemWidth={250}
      ref={c => setRef(c)}
      onSnapToItem={index => onActiveSpotChange(index)}
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
