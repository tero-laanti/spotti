import React, { useState } from 'react';
import { StyleSheet, TouchableHighlight, View, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Filters from './Filters';
import colors from '../../../../Theme';

export const filtersHeight = 60;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    backgroundColor: 'white',
    height: filtersHeight,
  },
  filters: {
    flexShrink: 1,
    flexGrow: 0,
    width: '100%',
  },
  toggleFiltersContainer: {
    backgroundColor: 'snow',
    width: '100%',
    justifyContent: 'center',
  },
  toggleIndicator: {
    paddingVertical: 2,
    marginHorizontal: 60,
    borderRadius: 3,
    backgroundColor: colors.dark,
  },
  toggleFiltersIcon: {
    position: 'absolute',
    right: 5,
  },
});

const MapFiltersContainer = props => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Filters {...props} />
    </View>
  );
};

export default MapFiltersContainer;
