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
    width: '90%',
    borderColor: 'black',
    borderWidth: 1,
    height: '12%',
    justifyContent: 'flex-start',
    paddingHorizontal: '3%',
    flexDirection: 'row',
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
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
    fontSize: 28,
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'snow',
    height: '10%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  useCurrentLocationText: {
    color: '#B4B4B4',
    fontSize: 18,
  },
});

const FrontPage = ({ navigation }) => {
  const [isFetchingLocation, setIsFetchingLocation] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const [locationError, setError] = useState(null);

  const fetchCurrentLocation = () => {
    if (!isFetchingLocation) {
      setIsFetchingLocation(true);
      navigator.geolocation.getCurrentPosition(
        location => {
          setIsFetchingLocation(false);
          setCurrentLocation(location);
        },
        error => {
          alert(error.message.toString());
          setIsFetchingLocation(false);
          setError('Virhe sijaintia hakiessa. Käytä hakua.');
        },
        { timeout: 15000, maximumAge: 10000 }
      );
    }
  };

  useEffect(() => fetchCurrentLocation(), []);

  useEffect(() => {
    if (searchButtonClicked && currentLocation) {
      const { latitude, longitude } = currentLocation.coords;
      setIsFetchingLocation(false);
      setSearchButtonClicked(false);
      navigation.navigate(routes.spotsMap, {
        searchCoordinates: {
          latitude,
          longitude,
        },
        disableSearchLocationMarker: true,
        searchString: `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`,
      });
    }
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
            <Text style={styles.searchText}>Hae Spotteja</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      {locationError ? (
        <Text style={{ color: 'white' }}>{locationError}</Text>
      ) : isFetchingLocation && searchButtonClicked ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <TouchableWithoutFeedback onPress={() => setSearchButtonClicked(true)}>
          <View style={styles.useCurrentLocationContainer}>
            <MaterialIcon name="my-location" size={20} color={colors.dark} />
            <Text> Käytä nykyistä sijaintiasi</Text>
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
