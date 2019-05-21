import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Search from './components/search/Search';
import SearchResults from './components/search/SearchResults';

const AppNavigator = createStackNavigator(
  {
    Search,
    SearchResults,
  },
  {
    initialRouteName: 'Search',
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => <AppContainer />;

export default App;
