import { createStackNavigator, createAppContainer } from 'react-navigation';
import Search from './Search';
import SpotsMapPage from './SpotsMapPage';
import SpotInfo from './SpotInfo';
import Purchase from './Purchase';

const SearchNavigator = createStackNavigator(
  {
    Search,
    SpotsMapPage,
    SpotInfo,
    Purchase,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      header: null,
    },
  }
);

export default createAppContainer(SearchNavigator);
