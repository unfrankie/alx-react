import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Notifications extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.displayDrawer !== this.props.displayDrawer;
  }

  render() {
    const { displayDrawer, handleDisplayDrawer, handleHideDrawer } = this.props;
    return (
      <div>
        <div className="menuItem" onClick={handleDisplayDrawer}>Your notifications</div>
        {displayDrawer ? (
          <div className="Notifications">
            <button onClick={handleHideDrawer}>Close</button>
            {/* Notification contents */}
          </div>
        ) : null}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;
