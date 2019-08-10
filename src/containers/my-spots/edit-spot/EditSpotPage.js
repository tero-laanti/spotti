import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, StyleSheet, TouchableOpacity, Text, Button, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { updateSpot } from '../../../reducers/spotsReducer';
import routes from '../routes';

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
    alignContent: 'center',
  },
  spotInfoSection: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: '#B4B4B4',
    borderBottomWidth: 1,
  },
  textInput: {
    paddingTop: 0,
    paddingBottom: 0,
    maxHeight: 100,
  },
});

const EditSpotPage = ({
  navigation,
  navigation: {
    state: {
      params: { spot, index },
    },
  },
  // eslint-disable-next-line no-shadow
  updateSpot,
}) => {
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [isDescriptionFocused, setIsDescriptionFocused] = useState(false);

  useEffect(() => {
    setAddress(spot.address);
    setDescription(spot.description);
  }, [spot]);

  const getDescriptionInputValue = () =>
    isDescriptionFocused ? description : description || 'No description yet';

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <View>
            <Icon name="arrow-left" size={30} color="#B4B4B4" style={styles.icon} />
          </View>
        </TouchableOpacity>
        <View style={[styles.infoHeader, styles.spotInfoSection]}>
          <TextInput
            value={address}
            onChangeText={text => setAddress(text)}
            style={styles.textInput}
          />
          <Text style={{ textAlignVertical: 'center' }}>{`${spot.price}€/h`}</Text>
        </View>
        <View style={styles.spotInfoSection}>
          <Text>Available times:</Text>
          <Button
            title="Edit times"
            onPress={() =>
              navigation.navigate(routes.editAvailableTimes, {
                spot,
                index,
              })
            }
          />
        </View>
        <View style={styles.spotInfoSection}>
          <Text>Description:</Text>
          <TextInput
            value={getDescriptionInputValue()}
            onChangeText={text => setDescription(text)}
            onFocus={() => setIsDescriptionFocused(true)}
            onBlur={() => setIsDescriptionFocused(false)}
            blurOnSubmit
            multiline
            style={styles.textInput}
          />
        </View>
      </View>
      {!isDescriptionFocused && (
        <Button
          title="Save"
          onPress={() => {
            updateSpot({ ...spot, address, description }, index);
            navigation.replace(routes.ownSpots);
          }}
        />
      )}
    </View>
  );
};

EditSpotPage.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        spot: PropTypes.shape({}).isRequired,
        index: PropTypes.number.isRequired,
      }),
    }),
  }).isRequired,
  updateSpot: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  updateSpot,
};

export default connect(
  null,
  mapDispatchToProps
)(EditSpotPage);
