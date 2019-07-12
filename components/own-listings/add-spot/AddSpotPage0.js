import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Button, Text, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: 'space-between',
  },
  textInput: {
    backgroundColor: 'lightgray',
  },
});

const AddSpotPage0 = ({ goToNextPage, value, setValue }) => (
  <View style={styles.container}>
    <View>
      <Text> Enter spot address: </Text>
      <TextInput
        style={styles.textInput}
        value={value}
        onChange={e => setValue(e.nativeEvent.text)}
      />
    </View>
    <Button title="Next page" onPress={goToNextPage} />
  </View>
);

AddSpotPage0.propTypes = {
  goToNextPage: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default AddSpotPage0;
