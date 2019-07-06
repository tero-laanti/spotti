import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  carouselItem: {
    width: 250,
    marginVertical: 5,
    backgroundColor: 'gainsboro',
    borderRadius: 3,
    elevation: 4,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowOffset: { height: 5, width: 5 },
  },
  lowerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  AddressFont: {
    fontSize: 18,
  },
  mediumFont: {
    fontSize: 16,
  },
});

const SpotsMapCarouselItem = ({ navigation, spot }) => (
  <TouchableHighlight onPress={() => navigation.navigate('SpotInfo', { spot })}>
    <View style={styles.carouselItem}>
      <View>
        <Text style={{ ...styles.AddressFont, textAlign: 'center' }}>{spot.address}</Text>
      </View>
      <View style={styles.lowerContainer}>
        <View>
          <Text style={styles.mediumFont}>
            <Icon name="directions-walk" size={styles.mediumFont.fontSize} />
            {spot.distance || 'N/A'}
          </Text>
        </View>
        <Text style={styles.mediumFont}>3€ / h </Text>
      </View>
    </View>
  </TouchableHighlight>
);

SpotsMapCarouselItem.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  spot: PropTypes.shape({
    id: PropTypes.number.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    imageUrls: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    description: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    distance: PropTypes.string.isRequired,
  }).isRequired,
};

export default SpotsMapCarouselItem;
