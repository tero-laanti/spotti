import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PanGestureHandler } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  carouselItem: {
    width: 250,
    marginVertical: 3,
    backgroundColor: 'gainsboro',
    borderRadius: 3,
    elevation: 4,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowOffset: { height: 5, width: 5 },
  },
  dragIndicator: {
    width: '40%',
    height: 4,
    borderRadius: 2,
    backgroundColor: 'dimgray',
  },
  lowerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addressFont: {
    textAlign: 'center',
    fontSize: 18,
  },
  mediumFont: {
    fontSize: 16,
  },
});

const SpotsMapCarouselItem = ({ navigation, spot, timeFilters }) => {
  const navigateToSpotInfo = () => navigation.navigate('SpotInfo', { spot, timeFilters });

  return (
    <PanGestureHandler minDeltaY={30} maxDeltaX={50} onGestureEvent={navigateToSpotInfo}>
      <View style={styles.carouselItem}>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.dragIndicator} />
          <Text style={styles.addressFont}>{spot.address}</Text>
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
    </PanGestureHandler>
  );
};

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
  timeFilters: PropTypes.shape({
    time: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
};

export default SpotsMapCarouselItem;
