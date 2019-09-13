import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import colors from '../../../../Theme';
import BackButton from '../../../lib/BackButton';
import routes from '../../routes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    position: 'absolute',
    left: '10%',
    right: '10%',
    top: 30,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.primary,
    backgroundColor: 'snow',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchText: {
    flex: 1,
    marginLeft: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
});

const MapSearch = ({ currentLocation, returnToMainMenu, navigation }) => (
  <View style={styles.container}>
    <View style={{ borderRightWidth: 1, borderRightColor: colors.primary, borderRadius: 25 }}>
      <BackButton onPress={() => returnToMainMenu()} size={25} />
    </View>
    <TouchableWithoutFeedback onPress={() => navigation.replace(routes.search)}>
      <View style={styles.searchContainer}>
        <Text numberOfLines={1} style={styles.searchText}>
          {currentLocation}
        </Text>
        <AwesomeIcon style={styles.searchIcon} name="search" size={30} color={colors.primary} />
      </View>
    </TouchableWithoutFeedback>
  </View>
);

MapSearch.propTypes = {
  currentLocation: PropTypes.string.isRequired,
  returnToMainMenu: PropTypes.func.isRequired,
  navigation: PropTypes.shape({}).isRequired,
};

export default MapSearch;
