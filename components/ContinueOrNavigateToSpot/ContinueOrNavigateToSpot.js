import React from 'react';
import { View, Button, Text, Platform, Linking } from 'react-native';
import PropTypes from 'prop-types';

const ContinueOrNavigateToSpot = ({ navigation, spotCoordinates }) => {
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
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 32,
          }}
        >
          Thank you for your purchase!
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <Button color="red" title="Continue" onPress={() => navigation.replace('Search')} />
        <Button
          type="outline"
          title="Navigate to Spot"
          onPress={() => openMapsAtCoordinate(spotCoordinates)}
        />
      </View>
    </View>
  );
};

ContinueOrNavigateToSpot.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  spotCoordinates: PropTypes.shape({
    longitude: PropTypes.number.isRequired,
    latitude: PropTypes.number.isRequired,
  }).isRequired,
};

export default ContinueOrNavigateToSpot;
