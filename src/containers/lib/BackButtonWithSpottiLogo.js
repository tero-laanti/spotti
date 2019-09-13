import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image } from 'react-native';
import SpottiLogo from '../../static/spotti-logo-blue.png';
import SpottiText from '../../static/spotti-logotype-blue.png';
import BackButton from './BackButton';

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    width: '50%',
    minHeight: 50,
  },
  logo: {
    height: 30,
    width: '15%',
    resizeMode: 'center',
    marginTop: 10,
  },
  logoText: {
    height: 30,
    width: '50%',
    resizeMode: 'center',
    marginLeft: '5%',
    marginTop: 10,
  },
});

const BackButtonWithSpottiLogo = ({ onPress }) => (
  <View style={styles.logoContainer}>
    <BackButton onPress={onPress} />
    <Image style={styles.logo} source={SpottiLogo} />
    <Image style={styles.logoText} source={SpottiText} />
  </View>
);

BackButtonWithSpottiLogo.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default BackButtonWithSpottiLogo;
