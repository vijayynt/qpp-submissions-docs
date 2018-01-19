import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../../../../styles/common/example-code-tabs.css';

const cssClass = 'example-code-tabs';

class Request extends React.PureComponent {
  formatJSON(input) {
    if (!input || input === '') {
      return '';
    }

    return JSON.stringify(input, null, 2);
  }
  render() {
    const request = this.formatJSON(this.props.request);
    const response = this.formatJSON(this.props.response);

    return (
      <Tabs className={cssClass}>
        <TabList>
          <Tab>Request</Tab>
          <Tab>Response</Tab>
        </TabList>
        <TabPanel>
          <pre>
            {request}
          </pre>
        </TabPanel>
        <TabPanel>
          <p>Response code:</p>
          <pre>200</pre>
          <p>Response body:</p>
          <pre>
            {response}
          </pre>
        </TabPanel>
      </Tabs>
    );
  }
}

Request.propTypes = {
  request: React.PropTypes.string,
  response: React.PropTypes.string
};

export default Request;
