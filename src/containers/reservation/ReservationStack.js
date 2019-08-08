import { createStackNavigator } from 'react-navigation';
import FrontPage from './FrontPage';
import SpotsMapPage from './map-page/SpotsMapPage';
import SpotInfoPage from './spot-info-page/SpotInfoPage';
import ReservationPage from './reservation-page/ReservationPage';
import SearchPage from './search-page/SearchPage';
import PostReservationPage from './post-reservation-page/PostReservationPage';

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
    initialRouteName: 'FrontPage',
    defaultNavigationOptions: {
      header: null,
    },
  }
);

ReservationNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const navigationOptions = {};
  if (routeName !== 'FrontPage') {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
};

export default ReservationNavigator;
