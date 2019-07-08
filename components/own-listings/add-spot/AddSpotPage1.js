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

const AddSpotPage1 = ({ navigation }) => (
  <View style={styles.container}>
    <BackButton navigation={navigation} />
    <Button title="Next page" onPress={() => navigation.navigate('AddSpotPage2')} />
  </View>
);

AddSpotPage1.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default AddSpotPage1;
