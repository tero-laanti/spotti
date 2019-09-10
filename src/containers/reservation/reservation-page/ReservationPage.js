import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import routes from '../routes';
import { bottomButton, defaultDatetimeFormat } from '../../../Theme';
import BackButton from '../../lib/BackButton';

const styles = StyleSheet.create({
  topContainer: {
    height: '100%',
  },
  arrowContainer: {
    paddingLeft: '5%',
    paddingTop: '5%',
  },
  informationContainer: {
    flex: 1,
    justifyContent: 'space-between',
    height: '85%',
  },
  containerPadding: {
    paddingLeft: '10%',
  },
  totalPaymentContainer: {
    alignItems: 'center',
    paddingBottom: '20%',
  },
  payment: {
    paddingBottom: '5%',
  },
});

const Purchase = ({
  navigation: {
    state: {
      params: { spot, timeFilters },
    },
  },
  navigation,
}) => (
  <View style={styles.topContainer}>
    <BackButton onPress={navigation.goBack} />

    <View style={styles.informationContainer}>
      <View style={styles.containerPadding}>
        <Text>Address: {spot.address}</Text>
      </View>
      <View style={styles.containerPadding}>
        <Text>
          Time: {defaultDatetimeFormat(timeFilters.from)} - {defaultDatetimeFormat(timeFilters.to)}
        </Text>
      </View>
      <View style={styles.containerPadding}>
        <Text>Price: {spot.price_per_hour} € </Text>
      </View>

      <View style={styles.totalPaymentContainer}>
        <Text style={styles.payment}>Payment method:</Text>
        <Text>Mobile payment</Text>
        <Button onPress={() => {}} title="Change" />
      </View>
    </View>
    <TouchableOpacity
      style={bottomButton.container}
      onPress={() =>
        navigation.navigate(routes.postReservation, {
          navigation,
          spotCoordinates: { latitude: spot.coordinates.x, longitude: spot.coordinates.y},
        })
      }
    >
      <Text style={bottomButton.text}>CONFIRM</Text>
    </TouchableOpacity>
  </View>
);

export default Purchase;

Purchase.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        spot: PropTypes.shape({
          date: PropTypes.string,
          price_per_hour: PropTypes.string,
          chosenTime: PropTypes.string,
          address: PropTypes.string,
        }).isRequired,
        timeFilters: PropTypes.shape({
          time: PropTypes.string,
          date: PropTypes.string,
        }).isRequired,
      }),
    }),
  }).isRequired,
};
