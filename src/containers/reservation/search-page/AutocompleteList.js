import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import AutocompleteListItem from './AutocompleteListItem';

const AutocompleteList = ({ autocompleteSuggestions, handleSuggestionSelect }) => {
  const indexOfLastSuggestion = autocompleteSuggestions.length - 1;
  return (
    <View>
      {autocompleteSuggestions.length ? (
        autocompleteSuggestions.map((autocompleteSuggestion, index) => (
          <AutocompleteListItem
            key={autocompleteSuggestion.label}
            suggestion={autocompleteSuggestion}
            isLastSuggestion={index === indexOfLastSuggestion}
            handleSuggestionSelect={handleSuggestionSelect}
          />
        ))
      ) : (
        <Text>No places found</Text>
      )}
    </View>
  );
};

AutocompleteList.propTypes = {
  autocompleteSuggestions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  handleSuggestionSelect: PropTypes.func.isRequired,
};

export default AutocompleteList;
