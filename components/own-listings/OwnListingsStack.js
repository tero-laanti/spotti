import { createStackNavigator } from 'react-navigation';
import OwnListingsScreen from './OwnListingsScreen';
import AddSpotPage1 from './add-spot/AddSpotPage1';
import AddSpotPage2 from './add-spot/AddSpotPage2';

const OwnListingsNavigator = createStackNavigator(
  {
    OwnListingsScreen,
    AddSpotPage1,
    AddSpotPage2,
  },
  {
    initialRouteName: 'OwnListingsScreen',
    defaultNavigationOptions: {
      header: null,
    },
  }
);

OwnListingsNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const navigationOptions = {};
  if (routeName !== 'OwnListingsScreen') {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
};

export default OwnListingsNavigator;
