import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  carouselItem: {
    width: 500,
    backgroundColor: 'blue',
  },
});

const SpotsMapCarousel = ({ spots, setRef, onActiveSpotChange }) => {
  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Text>{`Title: ${item.title}`}</Text>
    </View>
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
      sliderWidth={600}
      itemWidth={500}
      ref={c => {
        setRef(c);
      }}
      onSnapToItem={index => onActiveSpotChange(index)}
    />
  );
};

SpotsMapCarousel.propTypes = {
  spots: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  setRef: PropTypes.func.isRequired,
  onActiveSpotChange: PropTypes.func.isRequired,
};

export default SpotsMapCarousel;
