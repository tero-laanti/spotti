import React from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import PropTypes from 'prop-types';

const SpotsMapCarousel = () => {
  const _renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };
  return (
    <Carousel
      data={[{ title: 'moi' }, { title: 'moi2' }, { title: 'moi3' }, { title: 'moi4' }]}
      renderItem={_renderItem}
      sliderWidth={200}
      itemWidth={200}
    />
  );
};

export default SpotsMapCarousel;
