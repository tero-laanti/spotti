import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Text,
  ActivityIndicator,
} from 'react-native';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SpottiText from '../../static/spotti-logotype-white.png';
import SpottiLogo from '../../static/spotti-logo-white.png';
import routes from './routes';
import colors from '../../Theme';

const styles = StyleSheet.create({
  searchButton: {
    backgroundColor: 'snow',
    width: '70%',
    borderColor: 'black',
    borderWidth: 1,
    height: '10%',
    justifyContent: 'flex-start',
    padding: 10,
    flexDirection: 'row',
    marginBottom: 8,
    borderRadius: 5,
    elevation: 4,
    shadowOpacity: 0.9,
    shadowRadius: 10,
    shadowOffset: { height: 15, width: 15 },
  },
  container: {
    paddingTop: 100,
    height: 300,
    backgroundColor: colors.primary,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: '100%',
    height: '40%',
    position: 'absolute',
    top: 70,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  searchIconContainer: {
    justifyContent: 'center',
    marginBottom: 2,
    width: 30,
  },
  searchTextContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: '5%',
  },
  searchText: {
    fontSize: 22,
    color: '#B4B4B4',
  },
  logo: {
    height: '60%',
    width: '100%',
    resizeMode: 'center',
  },
  logoText: {
    height: '30%',
    width: '100%',
    resizeMode: 'center',
  },
  useCurrentLocationContainer: {
    justifyContent: 'center',
    backgroundColor: 'snow',
    paddingVertical: 8,
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
});

const FrontPage = ({ navigation }) => {
  const [isFetchingLocation, setIsFetchingLocation] = useState(true);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      location => {
        setIsFetchingLocation(false);
        setCurrentLocation(location);
      },
      error => {
        alert(error.message.toString());
        setIsFetchingLocation(false);
      },
      { timeout: 10000, maximumAge: 1000 }
    );
  }, []);

  useEffect(() => {
    if (searchButtonClicked && currentLocation) {
      setIsFetchingLocation(false);
      setSearchButtonClicked(false);
      navigation.navigate(routes.spotsMap, {
        searchCoordinates: {
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
        },
        disableSearchLocationMarker: true,
      });
    } else setIsFetchingLocation(false);
  }, [searchButtonClicked, currentLocation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={SpottiLogo} />
        <Image style={styles.logoText} source={SpottiText} />
      </View>
      <TouchableWithoutFeedback onPress={() => navigation.navigate(routes.search)}>
        <View style={styles.searchButton}>
          <View style={styles.searchIconContainer}>
            <AwesomeIcon name="search" size={30} color={colors.dark} />
          </View>
          <View style={styles.searchTextContainer}>
            <Text style={styles.searchText}>Search for spots</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      {isFetchingLocation ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <TouchableWithoutFeedback onPress={() => setSearchButtonClicked(true)}>
          <View style={styles.useCurrentLocationContainer}>
            <MaterialIcon name="my-location" size={20} color={colors.dark} />
            <Text style={{ color: '#B4B4B4' }}> Use my current location</Text>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

FrontPage.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default FrontPage;
