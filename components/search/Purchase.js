import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  informationContainer: {
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
  totalPaymentContainer: {
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

const Purchase = ({
  navigation: {
    state: {
      params: { spot, timeFilters },
    },
  },
  navigation,
}) => {
  return (
    <View>
      <View style={styles.arrowContainer}>
        <TouchableOpacity onPress={() =>
          navigation.navigate('SpotInfo', {
            spot: spot,
            timeFilters: { time: '18:10-20:15', date: '25/10/2019' },
          })
        }><Icon name="arrow-left" size={30} color="#B4B4B4" /></TouchableOpacity>
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
          <Button title="Change"></Button>
        </View>
      </View>
      <View style={styles.centerContainer}>
        <Button title="Confirm"></Button>
      </View>
    </View>
  );
}

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
          date: PropTypes.string
        }).isRequired,
      }),
    }),
  }).isRequired,
};

