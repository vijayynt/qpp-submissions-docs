import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../../../../styles/common/example-code-tabs.css';

const cssClass = 'example-code-tabs';

class UpdateProvider extends React.PureComponent {
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
  "npi": "123123",
  "firstName": "Jane",
  "lastName": "Doe",
  "ein": 990044,
  "credentials": "xxxxxxxx",
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
    "npi": "123123",
    "firstName": "Jane",
    "lastName": "Doe",
    "ein": 990044,
    "credentials": "xxxxxxxx",
    "organizationId": 1
  },
  "kind": "Provider",
  "apiVersion": "1.0.0"
}`}
          </pre>
        </TabPanel>
      </Tabs>
    );
  }
}

export default UpdateProvider;
