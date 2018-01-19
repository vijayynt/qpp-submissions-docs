import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import TabRoutes from './tab-routes';

class DropdownNav extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
    
    this.dropdownListItems = TabRoutes[this.props.tab].mergedRoutes.reduce(function(result, routeObject) {
      return result.concat(<option key={routeObject.path} value={routeObject.path}>{ routeObject.linkText }</option>);
    }, []);
  }

  handleDropdownSelect(e) {
    e.preventDefault();
    this.props.history.push(e.target.value);
  }

  render() {
    return <select id='options' className='ds-c-field ds-c-field--select' value={this.props.location.pathname} onChange={this.handleDropdownSelect}>
      {this.dropdownListItems}
    </select>;
  }
}

DropdownNav.propTypes = {
  tab: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(DropdownNav);
