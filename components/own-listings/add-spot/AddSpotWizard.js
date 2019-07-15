import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CurrentPageIndicator from './CurrentPageIndicator';
import AddSpotPage0 from './AddSpotPage0';
import AddSpotPage1 from './AddSpotPage1';
import BackButton from '../../BackButton';
import { addSpot } from '../../spotsReducer';

const pageLabels = ['Address', 'Details'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const AddSpotWizard = ({ navigation, addSpot: AddSpotToStore }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [address, setAddress] = useState('');
  const [details, setDetails] = useState('');

  const returnAddingSpot = () => {
    const newSpot = {
      address,
      details,
      id: 0,
      latitude: '65.05',
      longitude: '65.05',
      distance: '6',
      imageUrls: [],
    };
    AddSpotToStore(newSpot);
    navigation.replace('SpotAddedPage');
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

const mapDispatchToProps = { addSpot };

export default connect(
  null,
  mapDispatchToProps
)(AddSpotWizard);
