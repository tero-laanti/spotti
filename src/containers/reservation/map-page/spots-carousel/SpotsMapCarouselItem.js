import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../../../Theme';

const styles = StyleSheet.create({
  carouselItem: {
    width: '100%',
    height: '90%',
    marginVertical: 3,
    backgroundColor: 'snow',
    borderRadius: 5,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: `${colors.primary}DD`,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
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

const SpotsMapCarouselItem = ({ spot, showSpotInfoOfActiveSpot }) => (
  <TouchableOpacity onPress={showSpotInfoOfActiveSpot}>
    <View style={styles.carouselItem}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.addressFont}>{spot.address}</Text>
      </View>
      <View style={styles.lowerContainer}>
        <View>
          <Text style={styles.mediumFont}>
            <Icon name="directions-walk" size={styles.mediumFont.fontSize} />
            {`${(spot.distance * 1609).toFixed()}m` || 'N/A'}
          </Text>
        </View>
        <Text style={styles.mediumFont}>3€ / h </Text>
      </View>
    </View>
  </TouchableOpacity>
);

SpotsMapCarouselItem.propTypes = {
  spot: PropTypes.shape({
    id: PropTypes.number.isRequired,
    coordinates: PropTypes.shape().isRequired,
    description: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    distance: PropTypes.number.isRequired,
  }).isRequired,
  showSpotInfoOfActiveSpot: PropTypes.func.isRequired,
};

export default SpotsMapCarouselItem;
