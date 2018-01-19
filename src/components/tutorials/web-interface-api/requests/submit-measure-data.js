import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../../../../styles/common/example-code-tabs.css';

const cssClass = 'example-code-tabs';

class SubmitMeasureData extends React.PureComponent {
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
  "attribute": "dm-eye-exam",
  "value": "Yes",
  "scope": "2016-10-20T00:00:00.000Z",
  "comments": "this is a comment"
}`}
          </pre>
        </TabPanel>
        <TabPanel>
          <p>Response code:</p>
          <pre>200</pre>
          <p>Response body:</p>
          <pre>{`{
  "data": {
    "kind": "Status",
    "measureName": "DM-7",
    "measureId": 1,
    "measureStatus": "COMPLETE",
    "beneficiaryId": 1,
    "beneficiaryStatus": "COMPLETE"
  },
  "apiVersion": "1.0.0"
}`}
          </pre>
        </TabPanel>
      </Tabs>
    );
  }
}

export default SubmitMeasureData;
