import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import routes from '../routes';

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
    <View style={styles.arrowContainer}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(routes.spotInfo, {
            spot,
            timeFilters: { time: '18:10-20:15', date: '25/10/2019' },
          })
        }
      >
        <Icon name="arrow-left" size={30} color="#B4B4B4" />
      </TouchableOpacity>
    </View>

    <View style={styles.informationContainer}>
      <View style={styles.containerPadding}>
        <Text>Address: {spot.address}</Text>
      </View>
      <View style={styles.containerPadding}>
        <Text>
          Time: {timeFilters.time} {timeFilters.date}
        </Text>
      </View>
      <View style={styles.containerPadding}>
        <Text>Price: {spot.price} € </Text>
      </View>

      <View style={styles.totalPaymentContainer}>
        <Text style={styles.payment}>Payment method:</Text>
        <Text>Mobile payment</Text>
        <Button onPress={() => {}} title="Change" />
      </View>
    </View>
    <Button
      title="Confirm"
      onPress={() =>
        navigation.navigate(routes.postReservation, {
          navigation,
          spotCoordinates: { latitude: spot.latitude, longitude: spot.longitude },
        })
      }
    />
  </View>
);

export default Purchase;

Purchase.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        spot: PropTypes.shape({
          date: PropTypes.string,
          price: PropTypes.number,
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
