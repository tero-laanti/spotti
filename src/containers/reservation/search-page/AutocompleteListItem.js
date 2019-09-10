import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  suggestionBox: {
    height: 50,
    display: 'flex',
    justifyContent: 'center',
  },
  separator: {
    borderBottomColor: '#B4B4B4',
    borderBottomWidth: 1,
  },
});

const AutocompleteListItem = ({ suggestion, isLastSuggestion, handleSuggestionSelect }) => (
  <View style={[!isLastSuggestion && styles.separator]}>
    <TouchableOpacity onPress={() => handleSuggestionSelect(suggestion.coordinates)}>
      <View style={styles.suggestionBox}>
        <Text>{suggestion.label}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

AutocompleteListItem.propTypes = {
  suggestion: PropTypes.shape().isRequired,
  isLastSuggestion: PropTypes.bool.isRequired,
  handleSuggestionSelect: PropTypes.func.isRequired,
};

export default AutocompleteListItem;
