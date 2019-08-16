import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableWithoutFeedback, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SpottiText from '../../static/spotti-logotype-blue.png';
import SpottiLogo from '../../static/spotti-logo-blue.png';

const styles = StyleSheet.create({
  button: {
    width: '60%',
    borderColor: 'black',
    borderWidth: 1,
    height: '10%',
    justifyContent: 'flex-start',
    padding: 10,
    flexDirection: 'row',
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
});

const FrontPage = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={SpottiLogo} />
      <Image style={styles.logoText} source={SpottiText} />
    </View>
    <TouchableWithoutFeedback onPress={() => navigation.navigate('SearchPage')}>
      <View style={styles.button}>
        <View style={styles.searchIconContainer}>
          <Icon name="search" size={30} color="#B4B4B4" />
        </View>
        <View style={styles.searchTextContainer}>
          <Text style={styles.searchText}>Search</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  </View>
);

FrontPage.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default FrontPage;
