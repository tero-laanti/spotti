import React, { useState } from 'react';
import { StyleSheet, TouchableHighlight, View, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Filters from './Filters';

const toggleFiltersContainerHeight = 30;
const toggleFilterIconSize = 30;
const filtersHeight = 100;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    zIndex: 1,
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: 'lightsteelblue',
    left: 0,
    right: 0,
    top: -filtersHeight,
    height: filtersHeight + toggleFiltersContainerHeight,
  },
  filters: {
    flexShrink: 1,
    flexGrow: 0,
    width: '100%',
  },
  toggleFiltersContainer: {
    backgroundColor: 'gainsboro',
    width: '100%',
    height: toggleFiltersContainerHeight,
    justifyContent: 'center',
  },
  toggleIndicator: {
    paddingVertical: 2,
    marginHorizontal: 60,
    borderRadius: 3,
    backgroundColor: 'dimgray',
  },
  toggleFiltersIcon: {
    position: 'absolute',
    right: 5,
    top: -toggleFilterIconSize / 2,
  },
});

const MapFiltersContainer = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [translateYValue] = useState(new Animated.Value(0));
  const toggle = () =>
    Animated.timing(translateYValue, {
      toValue: isOpen ? 0 : filtersHeight,
    }).start(() => setIsOpen(!isOpen));

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY: translateYValue }] }]}>
      <View style={styles.filters}>
        <Filters {...props} />
      </View>
      <TouchableHighlight style={styles.toggleFiltersContainer} onPress={() => toggle()}>
        <View>
          <View style={styles.toggleIndicator} />
          <Icon
            style={styles.toggleFiltersIcon}
            name={isOpen ? 'chevron-up' : 'chevron-down'}
            size={toggleFilterIconSize}
            color="#B4B4B4"
          />
        </View>
      </TouchableHighlight>
    </Animated.View>
  );
};

export default MapFiltersContainer;
