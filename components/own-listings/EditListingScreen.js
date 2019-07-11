import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  iconButton: {
    justifyContent: 'center',
    width: 50,
  },
  icon: {
    margin: 10,
  },
  infoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spotInfoSection: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: '#B4B4B4',
    borderBottomWidth: 1,
  },
});

const EditListingScreen = ({
  navigation,
  navigation: {
    state: {
      params: { spot },
    },
  },
}) => (
  <View style={styles.container}>
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
        <View>
          <Icon name="arrow-left" size={30} color="#B4B4B4" style={styles.icon} />
        </View>
      </TouchableOpacity>
      <View style={[styles.infoHeader, styles.spotInfoSection]}>
        <Text>{spot.address}</Text>
        <Text>{`${spot.price}€/h`}</Text>
      </View>
      <View style={[styles.availableTimesContainer, styles.spotInfoSection]}>
        <Text>Available times:</Text>
        <Button title="Edit times" size={100}></Button>
      </View>
      <View style={[styles.description, styles.spotInfoSection]}>
        <Text>{spot.description || 'No description available.'}</Text>
      </View>
    </View>
    <Button title="Save"></Button>
  </View>
);

EditListingScreen.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  spot: PropTypes.shape({}).isRequired,
};

export default EditListingScreen;
