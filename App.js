import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import SearchScreen from './components/search/SearchScreen';

const PlaceholderScreen = () => (
  <View>
    <Text>PLACEHOLDER</Text>
  </View>
);

const AppNavigator = createBottomTabNavigator(
  {
    Search: SearchScreen,
    Placeholder: PlaceholderScreen,
  },
  {
    initialRouteName: 'Search',
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => <AppContainer />;

export default App;
