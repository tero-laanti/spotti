import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import theme from '../../Theme';
import FrontPage from './FrontPage';
import SpotsMapPage from './map-page/SpotsMapPage';
import SpotInfoPage from './spot-info-page/SpotInfoPage';
import ReservationPage from './reservation-page/ReservationPage';
import SearchPage from './search-page/SearchPage';
import PostReservationPage from './post-reservation-page/PostReservationPage';
import routes from './routes';

const ReservationNavigator = createStackNavigator(
  {
    FrontPage,
    SpotsMapPage,
    SpotInfoPage,
    ReservationPage,
    SearchPage,
    PostReservationPage,
  },
  {
    initialRouteName: routes.reservation,
    defaultNavigationOptions: {
      header: null,
    },
  }
);

ReservationNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const navigationOptions = {
    // eslint-disable-next-line react/prop-types
    tabBarIcon: ({ focused }) => (
      <Icon name="search-location" size={30} color={focused ? theme.primary : '#B4B4B4'} />
    ),
  };
  if (routeName !== 'FrontPage') {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
};

export default ReservationNavigator;
