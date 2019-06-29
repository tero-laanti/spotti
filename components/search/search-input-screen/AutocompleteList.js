import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import AutocompleteListItem from './AutocompleteListItem';

const styles = StyleSheet.create({
  suggestionList: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const AutocompleteList = ({ autocompleteSuggestions, handleSuggestionSelect }) => {
  const indexOfLastSuggestion = autocompleteSuggestions.length - 1;
  return (
    <View style={styles.suggestionList}>
      {autocompleteSuggestions.map((autocompleteSuggestion, index) => (
        <AutocompleteListItem
          key={autocompleteSuggestion}
          suggestion={autocompleteSuggestion}
          isLastSuggestion={index === indexOfLastSuggestion}
          handleSuggestionSelect={handleSuggestionSelect}
        />
      ))}
    </View>
  );
};

AutocompleteList.propTypes = {
  autocompleteSuggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSuggestionSelect: PropTypes.func.isRequired,
};

export default AutocompleteList;
