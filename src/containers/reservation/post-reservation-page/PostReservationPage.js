import React from 'react';
import { View, Button, Text, Platform, Linking, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import routes from '../routes';
import { bottomButton } from '../../../Theme';

const styles = StyleSheet.create({
  mainText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
  },
});

const AfterSpotPurchase = ({
  navigation,
  navigation: {
    state: {
      params: { spotCoordinates },
    },
  },
}) => {
  const openMapsAtCoordinate = ({ latitude, longitude }) => {
    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${latitude},${longitude}`;
    const label = 'Your Spot';
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url);
  };

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ flex: 3, justifyContent: 'center' }}>
        <Text style={styles.mainText}>Thank you for your purchase!</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <Button
          color="red"
          title="Back to front page"
          onPress={() => navigation.replace(routes.frontPage)}
        />
        <TouchableOpacity
          style={bottomButton.container}
          onPress={() => openMapsAtCoordinate(spotCoordinates)}
        >
          <Text style={bottomButton.text}>NAVIGATE TO SPOT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

AfterSpotPurchase.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        spotCoordinates: PropTypes.shape({
          longitude: PropTypes.number.isRequired,
          latitude: PropTypes.number.isRequired,
        }).isRequired,
      }),
    }),
  }).isRequired,
};

export default AfterSpotPurchase;
