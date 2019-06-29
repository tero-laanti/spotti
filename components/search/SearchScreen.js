import { createStackNavigator, createAppContainer } from 'react-navigation';
import Search from './Search';
import SpotsMapPage from './SpotsMapPage';
import SpotInfo from '../spot-info/SpotInfo';
import Purchase from './Purchase';
import SearchInput from './SearchInput';

const SearchNavigator = createStackNavigator(
  {
    Search,
    SpotsMapPage,
    SpotInfo,
    Purchase,
    SearchInput,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      header: null,
    },
  }
);

export default createAppContainer(SearchNavigator);
