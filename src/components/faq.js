import React from 'react';

import RateLimiting from './rate-limiting';

class FAQ extends React.Component {
  render() {
    return (
      <div>
        <h2 className='ds-h2'>Some Title</h2>
        <p className='ds-text'>Some Paragraph</p>

        {/* If you want to pull in another component, do this and import it at the top (see above) */}
        <RateLimiting />
      </div>
    );
  }
}

export default FAQ;
