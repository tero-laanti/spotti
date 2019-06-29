import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
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
      {searchInput.length >= 3 ? (
        <AutocompleteList
          autocompleteSuggestions={suggestions}
          handleSuggestionSelect={handleSuggestionSelect}
        />
      ) : (
        <Text>Try &quot;Kupittaa&quot;</Text>
      )}
    </View>
  );
};

SearchInputScreen.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default SearchInputScreen;
