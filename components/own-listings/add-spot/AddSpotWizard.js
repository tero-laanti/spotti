import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import CurrentPageIndicator from './CurrentPageIndicator';
import AddSpotPage0 from './AddSpotPage0';
import AddSpotPage1 from './AddSpotPage1';
import BackButton from '../../BackButton';

const pageLabels = ['Address', 'Details'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const AddSpotWizard = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const returnAddingSpot = () => navigation.replace('OwnListingsScreen');

  const returnWithoutAddingSpot = () => navigation.replace('OwnListingsScreen');

  const nextPage = () => {
    if (currentPage === pageLabels.length - 1) returnAddingSpot();
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage === 0) returnWithoutAddingSpot();
    setCurrentPage(currentPage - 1);
  };

  const addSpotPages = [
    <AddSpotPage0 goToNextPage={nextPage} goToPrevPage={prevPage} />,
    <AddSpotPage1
      goToNextPage={() => navigation.replace('OwnListingsScreen')}
      goToPrevPage={prevPage}
    />,
  ];

  return (
    <View style={styles.container}>
      <BackButton onPress={prevPage} />
      <CurrentPageIndicator pageLabels={pageLabels} currentIndex={currentPage} />
      {addSpotPages[currentPage]}
    </View>
  );
};

AddSpotWizard.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default AddSpotWizard;
