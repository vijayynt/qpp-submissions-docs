import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../../../../styles/common/example-code-tabs.css';

const cssClass = 'example-code-tabs';

class GetOrganizationScore extends React.PureComponent {
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
    "kind": "Score",
    "measures": [
      {
        "measureId": "318",
        "measureName": "CARE-2",
        "score": 6,
        "numerator": 20,
        "denominator": 30,
        "maximumPossiblePoints": 10,
        "performancePoints": 6,
        "decilePoints": 2,
        "partialPoints": 2,
        "outcomeOrPatientExperienceBonus": 5,
        "highPriorityBonus": 1,
        "endToEndBonus": 1
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

export default GetOrganizationScore;
