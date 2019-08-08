import { createStackNavigator } from 'react-navigation';
import OwnSpotsPage from './own-spots/OwnSpotsPage';
import AddSpotWizard from './add-spot/AddSpotWizard';
import SpotAddedPage from './add-spot/SpotAddedPage';
import EditSpotPage from './edit-spot/EditSpotPage';
import EditAvailableTimesPage from './edit-spot/edit-available-times-page/EditAvailableTimesPage';

const OwnSpotsNavigator = createStackNavigator(
  {
    OwnSpotsPage,
    AddSpotWizard,
    SpotAddedPage,
    EditSpotPage,
    EditAvailableTimesPage,
  },
  {
    initialRouteName: 'OwnSpotsPage',
    defaultNavigationOptions: {
      header: null,
    },
  }
);

OwnSpotsNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const navigationOptions = {};
  if (routeName !== 'OwnSpotsPage') {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
};

export default OwnSpotsNavigator;
