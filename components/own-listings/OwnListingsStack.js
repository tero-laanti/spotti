import { createStackNavigator } from 'react-navigation';
import OwnListingsScreen from './OwnListingsScreen';

const OwnListingsNavigator = createStackNavigator(
  {
    OwnListingsScreen,
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
