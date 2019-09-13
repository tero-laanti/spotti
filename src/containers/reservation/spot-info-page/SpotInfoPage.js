import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import routes from '../routes';
import colors, { bottomButton } from '../../../Theme';
import BackButton from '../../lib/BackButton';
import { getPhotosBySpotId } from '../../../Api';
import SpottiLogo from '../../../static/spotti-logo-blue.png';
import SpottiText from '../../../static/spotti-logotype-blue.png';
import BackButtonWithSpottiLogo from '../../lib/BackButtonWithSpottiLogo';

const screenWidth = Dimensions.get('window').width;

const imageFetchByUrl = imageUrl => (
  <Image source={{ uri: imageUrl }} style={{ height: 150, width: 300, margin: 30 }} />
);

const styles = StyleSheet.create({
  strongText: {
    paddingBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  topInfoBarContainer: {
    flexDirection: 'row',
  },
  topRightInfo: {
    flex: 1,
    marginTop: 10,
    marginRight: 5,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  textBelowLogoContainer: {
    paddingLeft: 10,
    paddingBottom: 10,
  },
  scrollableContainer: {
    marginHorizontal: 10,
    borderTopWidth: 0.5,
    borderTopColor: colors.primary,
  },
  descriptionContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.primary,
    paddingBottom: 10,
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
  const [photos, setPhotos] = useState(null);

  async function fetchPhotosOfCurrentSpot() {
    await getPhotosBySpotId(spot.id).then(res =>
      setPhotos(res.data.map(responseObject => responseObject.url))
    );
  }

  useEffect(() => {
    fetchPhotosOfCurrentSpot();
  }, []);

  const renderImageFromUrl = carouselItem => imageFetchByUrl(carouselItem.item);
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.topInfoBarContainer}>
        <BackButtonWithSpottiLogo onPress={navigation.goBack} />
        <Text style={styles.topRightInfo}>{spot.address}</Text>
      </View>
      <View style={styles.textBelowLogoContainer}>
        <Text style={styles.strongText}>
          {timeFilters.from} - {timeFilters.to}
        </Text>
        <Text style={{ textAlign: 'center' }}>
          2€/h, yhteensä <Text style={styles.strongText}>10€</Text>
        </Text>
      </View>
      <ScrollView style={styles.scrollableContainer}>
        <View style={{ paddingVertical: 10, flex: 1 }}>
          <Text style={styles.descriptionContainer}>
            {spot.description || 'No description available.'}
          </Text>
          {photos ? (
            photos.length > 0 ? (
              <View style={{ height: 175, flex: 1, alignItems: 'center' }}>
                <Carousel
                  autoplay
                  activeSlideAlignment="start"
                  data={photos}
                  renderItem={renderImageFromUrl}
                  sliderWidth={screenWidth - 20}
                  itemWidth={screenWidth - 50}
                  sliderHeight={50}
                />
              </View>
            ) : (
              <View style={{ alignItems: 'center', paddingVertical: 30 }}>
                <Text>No photos of the spot available!</Text>
              </View>
            )
          ) : (
            <View style={{ alignItems: 'center', paddingVertical: 30 }}>
              <Text>Loading photos</Text>
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
          description: PropTypes.string.isRequired,
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
