import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, Text, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const fakeImageFetchByUrl = imageUrl => (
  <View style={{ backgroundColor: 'blue', height: 150, width: 300, margin: 30 }}>
    <Text>{imageUrl}</Text>
  </View>
);

const SpotInfo = ({
  navigation: {
    state: {
      params: { spot },
    },
  },
  navigation,
}) => {
  const renderImageFromUrl = carouselItem => fakeImageFetchByUrl(carouselItem.item);

  return (
    <View
      style={{
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        paddingHorizontal: 10,
        paddingTop: 20,
      }}
    >
      <View style={{ paddingBottom: 10, flex: 1 }}>
        {spot.urls.length > 0 ? (
          <View style={{ height: 175 }}>
            <Carousel
              activeSlideAlignment="start"
              data={spot.urls}
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
        {spot.distance.length > 0 && (
          <Text style={{ paddingBottom: 10, fontWeight: 'bold' }}>
            Distance to the spot: {spot.distance}
          </Text>
        )}
        <ScrollView>
          <Text>{spot.description || 'No description available.'}</Text>
        </ScrollView>
      </View>
      <View style={{ flex: 0 }}>
        <Button title="Spot this" onPress={() => navigation.navigate('Purchase')} />
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
