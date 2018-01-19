import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../../../../styles/common/example-code-tabs.css';

const cssClass = 'example-code-tabs';

class GetBeneficiary extends React.PureComponent {
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
    "kind": "Beneficiary",
    "currentItemCount": 25,
    "itemsPerPage": 25,
    "startIndex": 50,
    "totalItems": 200,
    "items": [
      {
        "medicareId": "12345",
        "firstName": "John",
        "lastName": "Doe",
        "gender": "MALE",
        "dateOfBirth": "1955-11-06T00:00:00.000Z",
        "mrn": "1111111",
        "otherId": "111111",
        "comments": "Some comments here",
        "skippedReason": "skipped reason",
        "medicalRecordFound": "NO",
        "medicalNotQualifiedReason": "IN_HOSPICE",
        "medicalNotQualifiedDate": "2007-11-06T00:00:00.000Z",
        "totalProgressCount": 20,
        "progressCount": 10,
        "status": "INCOMPLETE",
        "organizationId": 1,
        "clinicId": 1,
        "qualificationComments": "this is qualification comment"
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

export default GetBeneficiary;
