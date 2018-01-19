import React from 'react';
import { Tabs } from 'react-tabs';

import InlineApiExample from '../common/inline-api-example';
import GetProvider from './requests/get-provider';
import UpdateProvider from './requests/update-provider';

class ProviderGuide extends React.Component {
  render() {
    Tabs.setUseDefaultStyles(false);

    return (
      <div>
        <div>
          <div className='temp-grid'>
            <h1 className='ds-h1'>Provider API Guide</h1>
            <p>The Provider API allows client applications to create, update, and delete providers within the system.</p>

            <p>Let's walk through an example of how we might update a provider record:</p>
            <h2 className='ds-h2' id='updating-a-provider'>
              <a
                className='tutorial-header-link'
                href='#updating-a-provider'>
                Updating a Provider
              </a>
            </h2>
            <p>To start, we will want to first retrieve a provider via the GET endpoint.</p>
            <p>You will need both a valid organization <em>id</em> and a <em>providerId</em>.</p>
            <InlineApiExample
              verb='GET'
              url='/providers/organization/{id}/provider/{providerId}'
              params={
                <tbody>
                  <tr><td>Organization Id</td>
                    <td>1234</td>
                    <td>Path Param</td></tr>
                  <tr><td>Provider Id</td>
                    <td>1234</td>
                    <td>Path Param</td></tr>
                </tbody>
            } />

            <GetProvider />

            <br />

            <p>Now that we have the original record, we can call the update endpoint to update whatever fields we need.</p>
            <InlineApiExample
              verb='PUT'
              url='/providers/organization/{id}/provider/{providerId}'
              params={
                <tbody>
                  <tr><td>Organization Id</td>
                    <td>1234</td>
                    <td>Path Param</td></tr>
                  <tr><td>Provider Id</td>
                    <td>1234</td>
                    <td>Path Param</td></tr>
                  <tr><td>Body</td>
                    <td>JSON Representing Provider to Update</td>
                    <td>Request Body</td></tr>
                </tbody>
            } />
            <UpdateProvider />
          </div>
        </div>
      </div>
    );
  }
}

export default ProviderGuide;
