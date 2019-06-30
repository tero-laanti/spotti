import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  carouselItem: {
    width: 250,
    backgroundColor: 'blue',
  },
});

const SpotsMapCarouselItem = ({ navigation, spot }) => (
  <TouchableOpacity onPress={() => navigation.navigate('SpotInfo', { spot })}>
    <View style={styles.carouselItem}>
      <Text>{`Title: ${spot.address}`}</Text>
    </View>
  </TouchableOpacity>
);

SpotsMapCarouselItem.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  spot: PropTypes.shape({}).isRequired,
};

export default SpotsMapCarouselItem;
