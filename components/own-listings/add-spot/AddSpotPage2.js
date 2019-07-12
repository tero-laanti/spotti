import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Button } from 'react-native';
import BackButton from '../../BackButton';
import AddSpotPage1 from "./AddSpotPage1";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

const AddSpotPage2 = ({ goToNextPage, goToPrevPage }) => (
  <View style={styles.container}>
    <BackButton onPress={goToPrevPage} />
    <Button title="Ready!" onPress={goToNextPage} />
  </View>
);

AddSpotPage2.propTypes = {
  goToNextPage: PropTypes.func.isRequired,
  goToPrevPage: PropTypes.func.isRequired,
};

export default AddSpotPage2;
