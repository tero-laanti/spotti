import React from 'react';
import PropTypes from 'prop-types';
import { View, Button } from 'react-native';

const SpotInfo = ({ navigation }) => (
  <View>
    <Button title="Spot this" onPress={() => navigation.navigate('Purchase')} />
  </View>
);

SpotInfo.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default SpotInfo;
