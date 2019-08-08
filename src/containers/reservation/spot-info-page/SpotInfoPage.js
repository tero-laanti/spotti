import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, Text, ScrollView, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

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
    minHeight: 50,
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
        <View style={{ flex: 1 }}>
          <Text style={styles.strongText}>{spot.address}</Text>
          {spot.distance.length > 0 && (
            <Text style={styles.strongText}>Walking distance: {spot.distance}</Text>
          )}
        </View>
        <View style={{ flex: 0 }}>
          <Text>2€/h</Text>
          <Text style={styles.strongText}>10€</Text>
        </View>
      </View>
      <ScrollView style={{ paddingHorizontal: 10, paddingTop: 5 }}>
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
      <View>
        <Button
          title="Spot this"
          onPress={() =>
            navigation.navigate('Purchase', {
              spot,
              timeFilters: { time: timeFilters.time, date: timeFilters.date },
            })
          }
        />
      </View>
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
        }).isRequired,
      }),
    }),
  }).isRequired,
};

export default SpotInfo;
