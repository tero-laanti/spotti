import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, Text, ScrollView } from 'react-native';

const SpotInfo = ({ navigation }) => (
  <View
    style={{
      display: 'flex',
      height: '100%',
      flexDirection: 'column',
      paddingHorizontal: 10,
      paddingTop: 20,
    }}
  >
    <View style={{ paddingBottom: 10, flex: 1 }}>
      <View style={{ backgroundColor: 'blue', height: 150, width: 300, margin: 30 }}>
        <Text>Image goes here</Text>
      </View>
      <Text style={{ paddingBottom: 10, fontWeight: 'bold' }}>
        Distance to the spot: {navigation.state.params.spot.distance}
      </Text>
      <ScrollView>
        <Text>{navigation.state.params.spot.description}</Text>
      </ScrollView>
    </View>
    <View style={{ flex: 0 }}>
      <Button title="Spot this" onPress={() => navigation.navigate('Purchase')} />
    </View>
  </View>
);

SpotInfo.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        spot: PropTypes.shape({
          distance: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        }).isRequired,
      }),
    }),
  }).isRequired,
};

export default SpotInfo;
