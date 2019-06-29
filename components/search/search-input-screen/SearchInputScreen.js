import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import AutocompleteList from './AutocompleteList';
import SearchInput from './SearchInput';
import { SEARCH_COORDINATES } from '../../mock-data';

const SearchInputScreen = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState('');

  const suggestions = ['First, Somewhere', 'Second, Somewhere else', 'Third, Who knows where'];
  const handleSearchInputChange = text => setSearchInput(text);
  const handleSuggestionSelect = () =>
    navigation.navigate('SpotsMapPage', { searchCoordinates: SEARCH_COORDINATES });
  const handleGoBackClick = () => navigation.navigate('Search');

  return (
    <View>
      <SearchInput
        handleGoBackClick={handleGoBackClick}
        handleSearchInputChange={handleSearchInputChange}
        searchInput={searchInput}
      />
      <AutocompleteList
        autocompleteSuggestions={suggestions}
        handleSuggestionSelect={handleSuggestionSelect}
      />
    </View>
  );
};

SearchInputScreen.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default SearchInputScreen;
