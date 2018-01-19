import React from 'react';
import { Tabs } from 'react-tabs';

import InlineApiExample from '../common/inline-api-example';
import GetTeamActivities from './requests/get-team-activities';
import GetActivityDetails from './requests/get-activity-details';

class ActivityGuide extends React.Component {
  render() {
    Tabs.setUseDefaultStyles(false);

    return (
      <div>
        <div>
          <div className='temp-grid'>
            <h1 className='ds-h1'>Activity API Guide</h1>
            <p>The Activity API allows client applications to retrieve activities related to the current user, an organization's team and to drill down into detailed information on what occurred within the system.</p>

            <p>Let's walk through an example of how we might navigate through a team's activities:</p>
            <h2 className='ds-h2' id='updating-a-activity'>
              <a
                className='tutorial-header-link'
                href='#retrieving-activity-data'>
                Retrieving Activity Data
              </a>
            </h2>
            <p>To start, we will want to first retrieve a list of team activities via the GET endpoint.</p>
            <p>You will need a valid organization <em>id</em>.</p>
            <InlineApiExample
              verb='GET'
              url='/activities/organization/{id}/team'
              params={
                <tbody>
                  <tr><td>Organization Id</td>
                    <td>1234</td>
                    <td>Path Param</td></tr>
                </tbody>
            } />

            <GetTeamActivities />

            <br />

            <p>Now we will want to get activity details by calling an additional endpoint.</p>
            <InlineApiExample
              verb='GET'
              url='/activities/organization/{id}/details'
              params={
                <tbody>
                  <tr><td>Organization Id</td>
                    <td>1234</td>
                    <td>Path Param</td></tr>
                </tbody>
            } />
            <GetActivityDetails />
          </div>
        </div>
      </div>
    );
  }
}

export default ActivityGuide;
