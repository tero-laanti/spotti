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

const AddSpotPage1 = ({ goToNextPage, value, setValue }) => (
  <View style={styles.container}>
    <View>
      <Text> More spot details: </Text>
      <TextInput
        multiline
        style={styles.textInput}
        value={value}
        onChangeText={text => setValue(text)}
      />
    </View>
    <Button title="Ready!" onPress={goToNextPage} />
  </View>
);

AddSpotPage1.propTypes = {
  goToNextPage: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default AddSpotPage1;
