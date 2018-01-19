import React from 'react';
import { Tabs } from 'react-tabs';

import InlineApiExample from '../common/inline-api-example';
import GetMeasure from './requests/get-measure';
import SubmitMeasureData from './requests/submit-measure-data';

class BeneficiaryGuide extends React.Component {
  render() {
    Tabs.setUseDefaultStyles(false);

    return (
      <div>
        <div>
          <div className='temp-grid'>
            <h1 className='ds-h1'>Submission API Guide</h1>
            <p>The Submission API allows client applications to submit measure data to the system.</p>

            <p>Let's walk through an example of how we might submit measure data for a beneficiary:</p>
            <h2 className='ds-h2' id='submitting-measure-data'>
              <a
                className='tutorial-header-link'
                href='#submitting-measure-data'>
                Submitting Measure Data
              </a>
            </h2>
            <p>To start, we may optionally want to first retrieve the submission data already associated with a measure.</p>
            <p>You will need both a valid organization <em>id</em>, a <em>beneficiaryId</em>, and a target <em>measureName</em>.</p>
            <InlineApiExample
              verb='GET'
              url='/beneficiaries/organization/{id}/beneficiary/{beneficiaryId}/measure/{measureName}/submissions'
              params={
                <tbody>
                  <tr><td>Organization Id</td>
                    <td>1234</td>
                    <td>Path Param</td></tr>
                  <tr><td>Beneficiary Id</td>
                    <td>1234</td>
                    <td>Path Param</td></tr>
                  <tr><td>Measure Name</td>
                    <td>DM-7</td>
                    <td>Path Param</td></tr>
                </tbody>
            } />

            <GetMeasure />

            <br />

            <p>Now that we have the original record, we can call the update endpoint to update whatever fields we need.</p>
            <InlineApiExample
              verb='PUT'
              url='/beneficiaries/organization/{id}/beneficiary/{beneficiaryId}/measure/{measureName}/submissions'
              params={
                <tbody>
                  <tr><td>Organization Id</td>
                    <td>1234</td>
                    <td>Path Param</td></tr>
                  <tr><td>Beneficiary Id</td>
                    <td>1234</td>
                    <td>Path Param</td></tr>
                  <tr><td>Measure Name</td>
                    <td>DM-7</td>
                    <td>Path Param</td></tr>
                  <tr><td>Body</td>
                    <td>JSON Representing Measure data to submit</td>
                    <td>Request Body</td></tr>
                </tbody>
            } />
            <SubmitMeasureData />
          </div>
        </div>
      </div>
    );
  }
}

export default BeneficiaryGuide;
