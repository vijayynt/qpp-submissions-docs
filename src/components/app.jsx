import React from 'react';
import '../../node_modules/uswds/dist/js/uswds.js';
import '../../node_modules/@cmsgov/design-system-core/dist/index.css';
import '../../node_modules/@cmsgov/design-system-layout/dist/index.css';
import '../../node_modules/uswds/dist/css/uswds.min.css';
import { Route } from 'react-router-dom'

import '../styles/app.css';
import '../styles/temp-grid.css';
import '../styles/usa-banner.css';

import Header from './header';
import Routes from './routes';
import DropdownNav from './dropdown-nav';
// TODO(aimee): May want to see if we can replace this with cms design system's <VerticalNav />
// https://cmsgov.github.io/design-system/components/vertical-nav/
import LeftNav from './left-nav';
import Introduction from './introduction';

const mergedRoutes = Object.values(Routes).reduce(function(result, routesGroup) {
  return Object.assign(result, routesGroup);
}, {});

const getComponent = ({ match, location }) => {
  return <div>{mergedRoutes[match.params.componentKey].component}</div>
}

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <a className="usa-skipnav" href="#main-content">Skip to main content</a>
        <Header />
        <div className="container temp-nav ds-h3 ds-u-margin-y--3">
          <a href="/qpp-submissions-docs" title="Home" aria-label="Home">QPP Submissions API <br/> Developer Documentation</a>
        </div>
        <div className="container">
          <div className="ds-l-row">
            <div id="dropdown-nav">
              <form className="usa-form">
                <DropdownNav />
              </form>
            </div>

            <div id="left-nav-div" className="ds-l-col--3 light-grey-border">
              <ul id="left-nav" className="usa-sidenav-list">
                {LeftNav}
              </ul>
            </div>
            <div id="outer-content-div" className="ds-u-float--left ds-l-col--9">
              <div id="inner-content-div" className="light-grey-border">
                <Route exact path="/" component={Introduction} />
                <Route exact path="/:componentKey" render={getComponent}/>
              </div>
            </div>
          </div>
        </div>
        <script src="/assets/js/vendor/uswds.min.js"></script>
      </div>
    );
  }
}

export default App;
