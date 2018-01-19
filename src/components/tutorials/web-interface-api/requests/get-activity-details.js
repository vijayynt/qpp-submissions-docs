import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../../../../styles/common/example-code-tabs.css';

const cssClass = 'example-code-tabs';

class GetActivityDetails extends React.PureComponent {
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
    "currentItemCount": 25,
    "itemsPerPage": 25,
    "startIndex": 50,
    "totalItems": 200,
    "items": [
      {
        "activity": {
          "changeLogs": [
            {
              "entityIdentifier": 1,
              "entityNaturalKey": 17635378,
              "stateBefore": "{ \"name\": \"xxxx\" }",
              "stateAfter": "{ \"name\": \"yyyy\" }",
              "activityId": 1
            }
          ],
          "user": {
            "id": 1,
            "username": "user@test.com",
            "firstName": "John",
            "lastName": "Doe",
            "externalUserId": "xxxxx"
          },
          "action": "ENTITY_UPDATE",
          "performedVia": "API",
          "userId": 1,
          "sessionId": 1,
          "originatedFrom": "/clinics",
          "lastActivityAt": "2017-08-16T00:00:00.000Z",
          "fileName": "example.xls",
          "affectedEntity": "clinics",
          "entityNaturalKey": 1234,
          "rootEntityIdentifier": 0,
          "rootEntityType": "beneficiaries",
          "numberOfEntitiesAffected": 1
        },
        "clinicId": "1234567",
        "name": "Some Clinic",
        "address1": "123 Fake St",
        "address2": "suite B",
        "city": "Herdon",
        "state": "VA",
        "zipCode": "20171",
        "organizationId": 1
      }
    ]
  },
  "apiVersion": "1.0.0"
}`}
          </pre>
        </TabPanel>
      </Tabs>
    );
  }
}

export default GetActivityDetails;
