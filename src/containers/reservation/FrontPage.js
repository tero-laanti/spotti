import React, { useState } from 'react';
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
import SpottiText from '../../static/spotti-logotype-blue.png';
import SpottiLogo from '../../static/spotti-logo-blue.png';
import routes from './routes';

const styles = StyleSheet.create({
  button: {
    width: '70%',
    borderColor: 'black',
    borderWidth: 1,
    height: '10%',
    justifyContent: 'flex-start',
    padding: 10,
    flexDirection: 'row',
    marginBottom: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: '100%',
    height: '30%',
    position: 'absolute',
    top: 10,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  searchIconContainer: {
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
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomColor: '#B4B4B4',
    borderBottomWidth: 1,
  },
});

const FrontPage = ({ navigation }) => {
  const [isFetchingLocation, setIsFetchingLocation] = useState(false);

  const searchWithCurrentLocation = () => {
    setIsFetchingLocation(true);
    navigator.geolocation.getCurrentPosition(
      location => {
        setIsFetchingLocation(false);
        navigation.navigate(routes.spotsMap, {
          searchCoordinates: {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          },
          disableSearchLocationMarker: true,
        });
      },
      error => {
        alert(error.message.toString());
        setIsFetchingLocation(false);
      },
      { timeout: 10000, maximumAge: 1000 }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={SpottiLogo} />
        <Image style={styles.logoText} source={SpottiText} />
      </View>
      <TouchableWithoutFeedback onPress={() => navigation.navigate(routes.search)}>
        <View style={styles.button}>
          <View style={styles.searchIconContainer}>
            <AwesomeIcon name="search" size={30} color="#B4B4B4" />
          </View>
          <View style={styles.searchTextContainer}>
            <Text style={styles.searchText}>Search</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      {isFetchingLocation ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <TouchableWithoutFeedback onPress={() => searchWithCurrentLocation()}>
          <View style={styles.useCurrentLocationContainer}>
            <MaterialIcon name="my-location" size={20} color="#B4B4B4" />
            <Text> Use my current location</Text>
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
