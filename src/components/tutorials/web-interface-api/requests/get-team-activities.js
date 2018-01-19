import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../../../../styles/common/example-code-tabs.css';

const cssClass = 'example-code-tabs';

class GetTeamActivities extends React.PureComponent {
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
    "kind": "Activity",
    "items": [
      {
        "action": "ENTITY_UPDATE",
        "performedVia": "API",
        "userId": 1,
        "sessionId": 1,
        "originatedFrom": "/clinics",
        "lastActivityAt": "2017-08-16T00:00:00.000Z",
        "fileName": "example.xls",
        "affectedEntity": "clinics",
        "count": 2,
        "user": {
          "id": 1,
          "username": "user@test.com",
          "firstName": "John",
          "lastName": "Doe",
          "externalUserId": "xxxxx"
        }
      }
    ],
    "currentItemCount": 25,
    "itemsPerPage": 25,
    "startIndex": 50,
    "totalItems": 200
  },
  "apiVersion": "1.0.0"
}`}
          </pre>
        </TabPanel>
      </Tabs>
    );
  }
}

export default GetTeamActivities;
