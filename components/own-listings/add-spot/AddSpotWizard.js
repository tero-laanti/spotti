import React, { Component } from 'react';
import AddSpotPage1 from './AddSpotPage1';
import CurrentPageIndicator from './CurrentPageIndicator';

const pageLabels = ['Address', 'Details'];

class AddSpotWizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  }

  render() {
    const { currentPage } = this.state;
    return (
      <div>
        <CurrentPageIndicator pageLabels={pageLabels} currentIndex={currentPage} />
      </div>
    );
  }
}

export default AddSpotWizard;
