import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

const AddSpotPage0 = ({ goToNextPage }) => (
  <View style={styles.container}>
    <Button title="Next page" onPress={goToNextPage} />
  </View>
);

AddSpotPage0.propTypes = {
  goToNextPage: PropTypes.func.isRequired,
};

export default AddSpotPage0;
