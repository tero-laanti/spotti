import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text, ScrollView, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import routes from '../routes';
import { bottomButton, defaultDatetimeFormat } from '../../../Theme';
import BackButton from '../../lib/BackButton';

const fakeImageFetchByUrl = imageUrl => (
  <View style={{ backgroundColor: 'blue', height: 150, width: 300, margin: 30 }}>
    <Text>{imageUrl}</Text>
  </View>
);

const styles = StyleSheet.create({
  strongText: {
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  topInfoBarContainer: {
    flex: 1,
    flexDirection: 'row',
    minHeight: 80,
  },
});

const SpotInfo = ({
  navigation: {
    state: {
      params: { spot, timeFilters },
    },
  },
  navigation,
}) => {
  const renderImageFromUrl = carouselItem => fakeImageFetchByUrl(carouselItem.item);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.topInfoBarContainer}>
        <BackButton onPress={navigation.goBack} />
        <View style={{ flex: 1 }}>
          <Text style={styles.strongText}>{spot.address}</Text>
          {spot.distance.length > 0 && (
            <Text style={styles.strongText}>Walking distance: {spot.distance}</Text>
          )}
          <Text style={styles.strongText}>
            Reserving from {defaultDatetimeFormat(timeFilters.from)} to{' '}
            {defaultDatetimeFormat(timeFilters.to)}
          </Text>
        </View>
        <View style={{ flex: 0 }}>
          <Text>2€/h</Text>
          <Text style={styles.strongText}>10€</Text>
        </View>
      </View>
      <ScrollView style={{ paddingHorizontal: 10, borderTopWidth: 1 }}>
        <View style={{ paddingBottom: 10, flex: 1 }}>
          <Text>{spot.description || 'No description available.'}</Text>
          {spot.imageUrls.length > 0 ? (
            <View style={{ height: 175 }}>
              <Carousel
                activeSlideAlignment="start"
                data={spot.imageUrls}
                renderItem={renderImageFromUrl}
                sliderWidth={450}
                itemWidth={300}
                sliderHeight={50}
              />
            </View>
          ) : (
            <View style={{ alignItems: 'center', paddingVertical: 30 }}>
              <Text>No images available!</Text>
            </View>
          )}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={bottomButton.container}
        onPress={() =>
          navigation.navigate(routes.reservation, {
            spot,
            timeFilters: { to: timeFilters.to, from: timeFilters.from },
          })
        }
      >
        <Text style={bottomButton.text}>SPOT THIS</Text>
      </TouchableOpacity>
    </View>
  );
};

SpotInfo.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        spot: PropTypes.shape({
          distance: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          imageUrls: PropTypes.arrayOf(PropTypes.string),
          timeFilters: PropTypes.shape({
            to: PropTypes.string.isRequired,
            from: PropTypes.string.isRequired,
          }),
        }).isRequired,
      }),
    }),
  }).isRequired,
};

export default SpotInfo;
