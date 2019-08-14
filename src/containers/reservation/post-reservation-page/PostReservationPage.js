import React from 'react';
import { View, Button, Text, Platform, Linking, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import routes from '../routes';

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
      <View style={{ flex: 5, justifyContent: 'center' }}>
        <Text style={styles.mainText}>Thank you for your purchase!</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <Button color="red" title="Continue" onPress={() => navigation.replace(routes.frontPage)} />
        <Button
          type="outline"
          title="Navigate to Spot"
          onPress={() => openMapsAtCoordinate(spotCoordinates)}
        />
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
