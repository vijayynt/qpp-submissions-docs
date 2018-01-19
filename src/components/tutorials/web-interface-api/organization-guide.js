import React from 'react';
import { Tabs } from 'react-tabs';

import InlineApiExample from '../common/inline-api-example';
import GetOrganization from './requests/get-organization';
import GetOrganizationScore from './requests/get-organization-score';

class OrganizationGuide extends React.Component {
  render() {
    Tabs.setUseDefaultStyles(false);

    return (
      <div>
        <div>
          <div className='temp-grid'>
            <h1 className='ds-h1'>Organization API Guide</h1>
            <p>The Organization API allows client applications to retrieve various information related to an organization within the system.</p>

            <p>Let's walk through an example of how we might get various data related to an organization record:</p>
            <h2 className='ds-h2' id='retrieving-an-organization'>
              <a
                className='tutorial-header-link'
                href='#retrieving-an-organization'>
                Retrieving Organization Data
              </a>
            </h2>
            <p>To start, we will want to first retrieve an organization via the GET endpoint.</p>
            <p>You will need a valid organization <em>id</em>.</p>
            <InlineApiExample
              verb='GET'
              url='/organizations/{id}'
              params={
                <tbody>
                  <tr><td>Organization Id</td>
                    <td>1234</td>
                    <td>Path Param</td></tr>
                </tbody>
            } />

            <GetOrganization />

            <br />

            <p>Now that we have the original record, let's get the score for this organization.</p>
            <InlineApiExample
              verb='GET'
              url='/organizations/{id}/score'
              params={
                <tbody>
                  <tr><td>Organization Id</td>
                    <td>1234</td>
                    <td>Path Param</td></tr>
                </tbody>
            } />
            <GetOrganizationScore />
          </div>
        </div>
      </div>
    );
  }
}

export default OrganizationGuide;
