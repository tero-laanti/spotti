import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import SearchStack from './components/search/SearchStack';

const PlaceholderScreen = () => (
  <View>
    <Text>PLACEHOLDER</Text>
  </View>
);

const AppNavigator = createBottomTabNavigator(
  {
    Search: SearchStack,
    Placeholder: PlaceholderScreen,
  },
  {
    initialRouteName: 'Search',
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => <AppContainer />;

export default App;
