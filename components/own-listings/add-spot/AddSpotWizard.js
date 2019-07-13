import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

const AddSpotWizard = ({ navigation, addSpot }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [address, setAddress] = useState('');
  const [details, setDetails] = useState('');

  const returnAddingSpot = () => {
    addSpot({ address, details });
    navigation.replace('OwnListingsScreen');
  };

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
    <AddSpotPage0
      goToNextPage={nextPage}
      goToPrevPage={prevPage}
      value={address}
      setValue={setAddress}
    />,
    <AddSpotPage1
      goToNextPage={nextPage}
      goToPrevPage={prevPage}
      value={details}
      setValue={setDetails}
    />,
  ];

  return (
    <View style={styles.container}>
      <BackButton onPress={prevPage} />
      <CurrentPageIndicator
        pageLabels={pageLabels}
        currentIndex={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {addSpotPages[currentPage]}
    </View>
  );
};

AddSpotWizard.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  addSpot: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addSpot: newSpot => dispatch({ type: 'ADD_SPOT', newSpot }),
});

export default connect(
  null,
  mapDispatchToProps
)(AddSpotWizard);
