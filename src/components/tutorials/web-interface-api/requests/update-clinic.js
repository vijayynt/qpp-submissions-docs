import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../../../../styles/common/example-code-tabs.css';

const cssClass = 'example-code-tabs';

class UpdateClinic extends React.PureComponent {
  render() {
    return (
      <Tabs className={cssClass}>
        <TabList>
          <Tab>Request</Tab>
          <Tab>Response</Tab>
        </TabList>
        <TabPanel>
          <pre>
            {`{
  "clinicId": "1234567",
  "name": "Some Clinic",
  "address1": "123 Fake St",
  "address2": "suite B",
  "city": "Herdon",
  "state": "VA",
  "zipCode": "20171",
  "organizationId": 1
}`}
          </pre>
        </TabPanel>
        <TabPanel>
          <p>Response code:</p>
          <pre>200</pre>
          <p>Response body:</p>
          <pre>{`{
  "data": {
    "clinicId": "1234567",
    "name": "Some Clinic",
    "address1": "123 Fake St",
    "address2": "suite B",
    "city": "Herdon",
    "state": "VA",
    "zipCode": "20171",
    "organizationId": 1
  },
  "apiVersion": "1.0.0"
}`}
          </pre>
        </TabPanel>
      </Tabs>
    );
  }
}

export default UpdateClinic;
