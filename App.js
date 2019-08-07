import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import SearchStack from './components/search/SearchStack';
import OwnListingsStack from './components/own-listings/OwnListingsStack';

const AppNavigator = createBottomTabNavigator(
  {
    Search: SearchStack,
    'My Listings': OwnListingsStack,
  },
  {
    initialRouteName: 'Search',
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => <AppContainer />;

export default App;

// To use storybook, replace the above line with:
// export default from './storybook';
