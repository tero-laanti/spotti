import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Button } from 'react-native';
import BackButton from '../../BackButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

const AddSpotPage1 = ({ goToNextPage, goToPrevPage }) => (
  <View style={styles.container}>
    <BackButton onPress={goToPrevPage} />
    <Button title="Next page" onPress={goToNextPage} />
  </View>
);

AddSpotPage1.propTypes = {
  goToNextPage: PropTypes.func.isRequired,
  goToPrevPage: PropTypes.func.isRequired,
};

export default AddSpotPage1;
