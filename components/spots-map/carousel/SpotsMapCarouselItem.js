import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  carouselItem: {
    width: 250,
    marginVertical: 5,
    backgroundColor: 'lightsteelblue',
    borderRadius: 3,
    elevation: 4,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowOffset: { height: 5, width: 5 },
  },
});

const SpotsMapCarouselItem = ({ navigation, spot }) => (
  <TouchableHighlight onPress={() => navigation.navigate('SpotInfo', { spot })}>
    <View style={styles.carouselItem}>
      <View>
        <Text style={{ textAlign: 'center', fontSize: 18 }}>{spot.address}</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text style={{ fontSize: 16 }}>
            <Icon name="directions-walk" />
            {spot.distance || 'N/A'}
          </Text>
        </View>
        <Text style={{ fontSize: 16 }}>3€ / h</Text>
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
