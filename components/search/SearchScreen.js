import { createStackNavigator, createAppContainer } from 'react-navigation';
import Search from './Search';
import SearchResults from './SearchResults';
import SpotInfo from './SpotInfo';
import Purchase from './Purchase';

const SearchNavigator = createStackNavigator(
  {
    Search,
    SearchResults,
    SpotInfo,
    Purchase,
  },
  { initialRouteName: 'Search' }
);

export default createAppContainer(SearchNavigator);
