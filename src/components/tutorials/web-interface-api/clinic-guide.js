import React from 'react';
import { Tabs } from 'react-tabs';

import InlineApiExample from '../common/inline-api-example';
import GetClinic from './requests/get-clinic';
import UpdateClinic from './requests/update-clinic';

class ClinicGuide extends React.Component {
  render() {
    Tabs.setUseDefaultStyles(false);

    return (
      <div>
        <div>
          <div className='temp-grid'>
            <h1 className='ds-h1'>Clinic API Guide</h1>
            <p>The Clinic API allows client applications to create, update, and delete clinics within the system.</p>

            <p>Let's walk through an example of how we might update a clinic record:</p>
            <h2 className='ds-h2' id='updating-a-clinic'>
              <a
                className='tutorial-header-link'
                href='#updating-a-clinic'>
                Updating a Clinic
              </a>
            </h2>
            <p>To start, we will want to first retrieve a clinic via the GET endpoint.</p>
            <p>You will need both a valid organization <em>id</em> and a <em>clinicId</em>.</p>
            <InlineApiExample
              verb='GET'
              url='/clinics/organization/{id}/clinic/{clinicId}'
              params={
                <tbody>
                  <tr><td>Organization Id</td>
                    <td>1234</td>
                    <td>Path Param</td></tr>
                  <tr><td>Clinic Id</td>
                    <td>1234</td>
                    <td>Path Param</td></tr>
                </tbody>
            } />

            <GetClinic />

            <br />

            <p>Now that we have the original record, we can call the update endpoint to update whatever fields we need.</p>
            <InlineApiExample
              verb='PUT'
              url='/clinics/organization/{id}/clinic/{clinicId}'
              params={
                <tbody>
                  <tr><td>Organization Id</td>
                    <td>1234</td>
                    <td>Path Param</td></tr>
                  <tr><td>Clinic Id</td>
                    <td>1234</td>
                    <td>Path Param</td></tr>
                  <tr><td>Body</td>
                    <td>JSON Representing Clinic to Update</td>
                    <td>Request Body</td></tr>
                </tbody>
            } />
            <UpdateClinic />
          </div>
        </div>
      </div>
    );
  }
}

export default ClinicGuide;
