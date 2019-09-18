import React from 'react';
import { connect } from 'react-redux';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import SpotsMap from './spots-map/SpotsMap';
import SpotsMapCarousel from './spots-carousel/SpotsMapCarousel';
import MapFiltersContainer from './map-filters/MapFiltersContainer';
import routes from '../routes';
import { clearAndAddNewSpots } from '../../../reducers/spotsReducer';
import { getNearbySpots } from '../../../Api';
import MapSearch from './map-search/MapSearch';
import { defaultDatetimeFormat } from '../../../Theme';

const minuteInMilliseconds = 60000;
const currentDate = new Date();
const defaultValueForFromFilter = currentDate;
const defaultValueForToFilter = new Date(currentDate.getTime() + minuteInMilliseconds * 60);

class SpotsMapPage extends React.Component {
  constructor(props) {
    super(props);
    this.carouselRef = React.createRef();
    this.mapRef = React.createRef();
    this.state = {
      ToFilterValue: defaultValueForToFilter,
      FromFilterValue: defaultValueForFromFilter,
      currentActiveIndex: 0,
      loadingSpots: true,
    };
  }

  componentDidMount() {
    const { navigation, clearAndAddNewSpots: addSpotsAction } = this.props;
    const coordinates = navigation.getParam('searchCoordinates');
    getNearbySpots(coordinates.latitude, coordinates.longitude)
      .then(res => addSpotsAction(res.data))
      .then(() => this.setState({ loadingSpots: false }));
  }

  setMapRef = c => {
    this.mapRef = c;
  };

  setCarouselRef = c => {
    this.carouselRef = c;
  };

  showSpotInfoOfActiveSpot = () => {
    const { spots, navigation } = this.props;
    const { currentActiveIndex, ToFilterValue, FromFilterValue } = this.state;

    const durationOfParkingInHours = (ToFilterValue - FromFilterValue) / 1000 / 60 / 60;
    const to = defaultDatetimeFormat(ToFilterValue);
    const from = defaultDatetimeFormat(FromFilterValue);

    const toString = `${to.date} ${to.time}`;
    const fromString = `${from.date} ${from.time}`;

    navigation.navigate(routes.spotInfo, {
      spot: spots[currentActiveIndex],
      timeFilters: { to: toString, from: fromString },
      durationOfParkingInHours,
    });
  };

  animateMapTo = coordinates =>
    this.mapRef.animateCamera({
      center: { latitude: coordinates.latitude, longitude: coordinates.longitude },
    });

  centerMapOnSpotIndex = i => {
    const { spots } = this.props;
    this.setState({ currentActiveIndex: i });
    const spotToCenter = spots[i];
    this.animateMapTo({
      latitude: spotToCenter.coordinates.x,
      longitude: spotToCenter.coordinates.y,
    });
  };

  markerClick = i => {
    const { currentActiveIndex } = this.state;
    if (currentActiveIndex === i) this.showSpotInfoOfActiveSpot();
    else this.snapCarouselToSpotIndex(i);
  };

  snapCarouselToSpotIndex = i => {
    this.setState({ currentActiveIndex: i });
    this.carouselRef.snapToItem(i);
  };

  onFilterValueChange = (key, value) => {
    const { ToFilterValue, FromFilterValue } = this.state;

    if (key === 'FromFilterValue')
      if (value > ToFilterValue.getTime() - minuteInMilliseconds * 5)
        this.setState({
          FromFilterValue: value,
          ToFilterValue: new Date(value.getTime() + minuteInMilliseconds * 5),
        });
      else this.setState({ FromFilterValue: value });
    else if (key === 'ToFilterValue')
      if (value > FromFilterValue.getTime() + minuteInMilliseconds * 5)
        this.setState({ ToFilterValue: value });
  };

  newLocationSelectedOnMap = e =>
    alert(`You clicked at: ${JSON.stringify(e.nativeEvent.coordinate)}`);

  render() {
    const {
      navigation: {
        state: {
          params: {
            searchCoordinates: initialCoordinates,
            disableSearchLocationMarker,
            searchString,
          },
        },
      },
      navigation,
      spots,
    } = this.props;

    const { ToFilterValue, FromFilterValue, currentActiveIndex, loadingSpots } = this.state;
    return (
      <View style={{ height: '100%', width: '100%' }}>
        {loadingSpots && (
          <View
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ActivityIndicator size="large" />
          </View>
        )}
        <SpotsMap
          onLongPress={this.newLocationSelectedOnMap}
          currentActiveIndex={currentActiveIndex}
          onActiveSpotChange={this.markerClick}
          spots={spots}
          initialCoordinates={initialCoordinates}
          disableSearchLocationMarker={disableSearchLocationMarker}
          animateMapTo={this.animateMapTo}
          setRef={this.setMapRef}
        />
        <MapSearch
          currentLocation={searchString}
          returnToMainMenu={navigation.popToTop}
          navigation={navigation}
        />
        <SpotsMapCarousel
          showSpotInfoOfActiveSpot={this.showSpotInfoOfActiveSpot}
          navigation={navigation}
          onActiveSpotChange={this.centerMapOnSpotIndex}
          spots={spots}
          setRef={this.setCarouselRef}
        />
        <MapFiltersContainer
          to={ToFilterValue}
          from={FromFilterValue}
          onChange={this.onFilterValueChange}
          goBack={navigation.goBack}
        />
      </View>
    );
  }
}

SpotsMapPage.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        searchString: PropTypes.string.isRequired,
        searchCoordinates: PropTypes.shape({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
          disableSearchLocationMarker: PropTypes.bool,
        }).isRequired,
      }),
    }),
  }).isRequired,
  spots: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  clearAndAddNewSpots: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  spots: state.spots,
});

const mapDispatchToProps = {
  clearAndAddNewSpots,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotsMapPage);
