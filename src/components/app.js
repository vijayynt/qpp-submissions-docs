import React from 'react';
import 'uswds/dist/js/uswds.js';
import '@cmsgov/design-system-core/dist/index.css';
import '@cmsgov/design-system-layout/dist/index.css';
import { Route, withRouter } from 'react-router-dom';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';

import '../styles/qpp-style/css/qpp-style.css';
import '../styles/app.css';
import '../styles/temp-grid.css';

import Header from './header';
import TabRoutes from './tab-routes';
import DropdownNav from './dropdown-nav';
import LeftNav from './left-nav';
import Footer from './footer';
import SubscribeModal from './subscribe-modal';

// bootstrap js needs window.jQuery to be defined, but imports are always hoisted
// so we need to require (as import 'bootstrap...' would get hoisted before window.jQuery is set)
window.jQuery = window.$ = $;
require('bootstrap');

class App extends React.Component {
  constructor() {
    super();

    let tab = 'Submissions API';

    // hack to make sure that the right tab is selected on page refresh
    Object.keys(TabRoutes).forEach((key) => {
      TabRoutes[key].mergedRoutes.forEach((route) => {
        if (window.location.pathname.indexOf(route.path) !== -1) {
          tab = key;
        }
      });
    });

    this.state = {
      tab
    };
  }

  isActive(tab) {
    return (this.state.tab === tab) ? 'qpp-docs-title-text active' : 'qpp-docs-title-text';
  }

  handleTabChange(tab) {
    if (tab === 'Submissions API') {
      this.props.history.push('/');
    } else {
      this.props.history.push('/webinterface');
    }

    this.setState({ tab });
  }

  render() {
    return (
      <div>
        <main id='panel'>
          <Header />
          <div className='qpp-docs-title-container'>
            <div className='ds-l-container'>
              <a className='qpp-docs-title-back' href='https://qpp.cms.gov/developers'>&lt; back to QPP Developer Tools</a>
              <div className="tab">
                <h3 className={this.isActive('Submissions API')}><a href="#" onClick={() => this.handleTabChange('Submissions API')}>QPP Submissions API Documentation</a></h3>
                <h3 className={this.isActive('Web Interface API')}><a href="#" onClick={() => this.handleTabChange('Web Interface API')}>Web Interface API Documentation</a></h3>
              </div>
            </div>
          </div>

          <div className='ds-l-container'>
            <div className='ds-l-row'>
              <div className='ds-l-col--12 ds-u-padding-top--3 ds-u-display--block ds-u-sm-display--none'>
                <form>
                  <DropdownNav tab={this.state.tab} />
                </form>
              </div>

              <div className='ds-l-col--3 ds-u-padding-top--4 ds-u-display--none ds-u-sm-display--block'>
                <div className='content-block'>
                  <ul className='ds-c-list--bare ds-u-padding-top--2'>
                    <LeftNav tab={this.state.tab} />
                  </ul>
                </div>
              </div>

              <div className='ds-u-padding-top--4 ds-l-col--12 ds-l-sm-col--9'>
                <div className='content-block ds-u-padding--3'>
                  {TabRoutes[this.state.tab].mergedRoutes.map(({path, exact, component}, index) => (
                    <Route
                      key={index}
                      path={path}
                      exact={exact}
                      component={component}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Footer />
          <script src='/assets/js/vendor/uswds.min.js' />
        </main>
        <SubscribeModal />
      </div>
    );
  }
}

App.propTypes = {
  history: React.PropTypes.object
};

export default withRouter(App);
