import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  carouselItem: {
    width: 250,
    backgroundColor: 'blue',
  },
});

const SpotsMapCarousel = ({ navigation, spots, setRef, onActiveSpotChange }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('SpotInfo', { spot: item })}>
      <View style={styles.carouselItem}>
        <Text>{`Title: ${item.address}`}</Text>
      </View>
    </TouchableOpacity>
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
      address: PropTypes.string.isRequired,
    })
  ).isRequired,
  setRef: PropTypes.func.isRequired,
  onActiveSpotChange: PropTypes.func.isRequired,
};

export default SpotsMapCarousel;
