import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../../../../styles/common/example-code-tabs.css';

const cssClass = 'example-code-tabs';

class GetOrganization extends React.PureComponent {
  render() {
    return (
      <Tabs className={cssClass}>
        <TabList>
          <Tab>Request</Tab>
          <Tab>Response</Tab>
        </TabList>
        <TabPanel>
          <pre>
            N/A
          </pre>
        </TabPanel>
        <TabPanel>
          <p>Response code:</p>
          <pre>200</pre>
          <p>Response body:</p>
          <pre>{`{
  "data": {
    "kind": "Organization",
    "id": 1,
    "tin": 123456789,
    "name": "Healthcare Alliance",
    "submissionUpdatedOn": "12/12/2015",
    "lockedOn": "05/23/2016",
    "acoId": 1,
    "acoName": "ACO Name",
    "acoReportingMechanism": "WEB_INTERFACE",
    "acoType": "SSP",
    "submissionId": 14355676543,
    "isTestOrg": false
  },
  "apiVersion": "1.0.0"
}`}
          </pre>
        </TabPanel>
      </Tabs>
    );
  }
}

export default GetOrganization;
