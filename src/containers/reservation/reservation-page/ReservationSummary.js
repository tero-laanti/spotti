import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  summaryTextContainer: {
    fontSize: 12,
    color: 'silver',
    paddingBottom: 5,
    marginBottom: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgrey',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalRow: {
    borderTopWidth: 1,
    borderStyle: 'dashed',
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  strongText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

const ReservationSummary = ({ pricePerHour, durationInHours, discountPercentage = 0 }) => {
  const totalPriceWithoutDiscounts = pricePerHour * durationInHours;
  const totalDiscount = discountPercentage
    ? totalPriceWithoutDiscounts - discountPercentage * totalPriceWithoutDiscounts
    : 0;
  const totalPriceWithDiscounts = totalPriceWithoutDiscounts - totalDiscount;
  const vatAmount = totalPriceWithDiscounts * 0.24;
  const noVatAmount = totalPriceWithDiscounts - vatAmount;
  return (
    <View>
      <Text style={styles.summaryTextContainer}>Tilauksen yhteenveto</Text>
      <View style={styles.summaryRow}>
        <Text>Hinta</Text>
        <Text>{noVatAmount.toFixed(2)}€</Text>
      </View>
      <View style={styles.summaryRow}>
        <Text>Verot</Text>
        <Text>{vatAmount.toFixed(2)}€</Text>
      </View>
      <View style={styles.summaryRow}>
        <Text>Alennus</Text>
        <Text>{totalDiscount.toFixed(2)}€</Text>
      </View>
      <View style={styles.totalRow}>
        <Text style={styles.strongText}>Kokonaismäärä</Text>
        <Text style={styles.strongText}>{totalPriceWithDiscounts.toFixed(2)}€</Text>
      </View>
    </View>
  );
};

ReservationSummary.propTypes = {
  pricePerHour: PropTypes.number.isRequired,
  durationInHours: PropTypes.number.isRequired,
  discountPercentage: PropTypes.string,
};

export default ReservationSummary;
