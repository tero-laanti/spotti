import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import AutocompleteList from './AutocompleteList';
import SearchInput from './SearchInput';
import { SEARCH_COORDINATES, AUTOCOMPLETE_SUGGESTIONS } from '../../../mock-data';
import routes from '../routes';

const SearchInputPage = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState('DEMO-APP. Search disabled.');

  const getAutocompleteSuggestions = () => AUTOCOMPLETE_SUGGESTIONS;
  const handleSearchInputChange = text => setSearchInput(text);
  const handleSuggestionSelect = coordinates =>
    navigation.navigate(routes.spotsMap, { searchCoordinates: coordinates });
  const handleGoBackClick = () => navigation.goBack();
  const handleSearchClick = () => {
    if (getAutocompleteSuggestions().length > 0)
      navigation.navigate(routes.spotsMap, { searchCoordinates: SEARCH_COORDINATES });
  };

  return (
    <View>
      <SearchInput
        handleGoBackClick={handleGoBackClick}
        handleSearchInputChange={handleSearchInputChange}
        handleSearchClick={handleSearchClick}
        searchInput={searchInput}
      />
      {searchInput.length >= 3 ? (
        <AutocompleteList
          autocompleteSuggestions={getAutocompleteSuggestions()}
          handleSuggestionSelect={handleSuggestionSelect}
        />
      ) : (
        <Text>Try &quot;Kupittaa&quot;</Text>
      )}
    </View>
  );
};

SearchInputPage.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default SearchInputPage;
