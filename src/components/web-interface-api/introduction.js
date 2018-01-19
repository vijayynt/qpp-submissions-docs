import React from 'react';
import { Link } from 'react-router-dom';

class Introduction extends React.Component {
  render() {
    return (
      <div>
        <h2 className='ds-h2'>Web Interface API</h2>
        <p className='ds-text--lead'>The Web Interface API allows client applications to manage beneficiaries, submissions, clinics, providers and many other records in the QPP system.</p>

        <h2 className='ds-h2'>Explore the API</h2>

        <p className='ds-text'>Walk through the various guides to learn how to submit data to them.</p>
        <Link to='/webinterface/beneficiary-guide' className='ds-c-button ds-c-button--primary'>Start the tutorial</Link>
      </div>
    );
  }
}

export default Introduction;
