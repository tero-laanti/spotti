import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: '85%',
  },
  containerPadding: {
    paddingLeft: '10%',
  },
  arrowContainer: {
    paddingLeft: '5%',
    paddingTop: '5%',
  },
  totalpayContainer: {
    alignItems: 'center',
    paddingBottom: '20%',
  },

  centerContainer: {
    alignSelf: 'center',
    width: '80%',
    marginTop: 10,
  },
  payment: {
    paddingBottom: '5%',
  },
});
const spot = {
  id: 1,
  latitude: 60.448,
  longitude: 22.289,
  address: 'Spot street 37',
  distance: '12 min',
  urls: 'www.test.url',
  chosenTime: '20:30-21:00',
  date: '26.06.2019',
  price: '3€',
  description: 'This is a long Spot description that should be scrollable in the spotinfopage. '.repeat(
    15
  ),
};
const Purchase = () => (
  <View>
    <View style={styles.arrowContainer}>
      <Text>Close</Text>
    </View>

    <View style={styles.container}>
      <View style={styles.containerPadding}>
        <Text>Address: {spot.address}</Text>
      </View>
      <View style={styles.containerPadding}>
        <Text>
          Time: {spot.chosenTime} {spot.date}
        </Text>
      </View>
      <View style={styles.containerPadding}>
        <Text>Price: {spot.price} </Text>
      </View>

      <View style={styles.totalpayContainer}>
        <Text style={styles.payment}>Payment method:</Text>
        <Text>Mobile payment</Text>
        <Button title="Change"></Button>
      </View>
    </View>
    <View style={styles.centerContainer}>
      <Button title="Confirm" />
    </View>
  </View>
);

export default Purchase;

// Purchase.propTypes = {
//   spot: PropTypes.shape({
//     id: PropTypes.number,
//     latitude: PropTypes.number,
//     longitude: PropTypes.number,
//     address: PropTypes.string,
//     distance: PropTypes.string,
//     urls: PropTypes.string,
//     description: PropTypes.string,
//   }).isRequired,
// };
