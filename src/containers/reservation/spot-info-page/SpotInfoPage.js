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
      params: { spot, timeFilters, durationOfParkingInHours },
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
          {spot.price_per_hour}€/h, yhteensä{' '}
          <Text style={styles.strongText}>
            {(spot.price_per_hour * durationOfParkingInHours).toFixed(2)}€
          </Text>
        </Text>
      </View>
      <ScrollView style={styles.scrollableContainer}>
        <View style={{ paddingVertical: 10, flex: 1 }}>
          <Text style={styles.descriptionContainer}>
            {spot.description || 'Spotilla ei ole kuvausta.'}
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
                <Text>Spotista ei ole kuvia.</Text>
              </View>
            )
          ) : (
            <View style={{ alignItems: 'center', paddingVertical: 30 }}>
              <Text>Ladataan kuvia</Text>
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
            durationOfParkingInHours,
          })
        }
      >
        <Text style={bottomButton.text}>SPOTTAA</Text>
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
        }).isRequired,
        durationOfParkingInHours: PropTypes.number.isRequired,
        timeFilters: PropTypes.shape({
          to: PropTypes.string.isRequired,
          from: PropTypes.string.isRequired,
        }),
      }),
    }),
  }).isRequired,
};

export default SpotInfo;
