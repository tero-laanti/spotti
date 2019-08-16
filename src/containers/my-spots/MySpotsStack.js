import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Entypo';
import OwnSpotsPage from './own-spots/OwnSpotsPage';
import AddSpotWizard from './add-spot/AddSpotWizard';
import SpotAddedPage from './add-spot/SpotAddedPage';
import EditSpotPage from './edit-spot/EditSpotPage';
import EditAvailableTimesPage from './edit-spot/edit-available-times-page/EditAvailableTimesPage';
import routes from './routes';

const OwnSpotsNavigator = createStackNavigator(
  {
    OwnSpotsPage,
    AddSpotWizard,
    SpotAddedPage,
    EditSpotPage,
    EditAvailableTimesPage,
  },
  {
    initialRouteName: routes.ownSpots,
    defaultNavigationOptions: {
      header: null,
    },
  }
);

OwnSpotsNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const navigationOptions = {
    tabBarIcon: ({ focused }) => (
      <Icon name="location" size={30} color={focused ? '#478DD2' : '#B4B4B4'} />
    ),
  };
  if (routeName !== 'OwnSpotsPage') {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
};

export default OwnSpotsNavigator;
