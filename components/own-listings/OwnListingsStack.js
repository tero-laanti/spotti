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

export default OwnListingsNavigator;
