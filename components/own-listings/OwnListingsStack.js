import { createStackNavigator } from 'react-navigation';
import OwnListingsScreen from './OwnListingsScreen';
import AddSpotWizard from './add-spot/AddSpotWizard';

const OwnListingsNavigator = createStackNavigator(
  {
    OwnListingsScreen,
    AddSpotWizard,
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
