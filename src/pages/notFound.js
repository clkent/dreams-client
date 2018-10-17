import React from 'react';
import { connect } from 'react-redux';

import Header from '../_components/header.component';
import DashHeader from '../_components/dashHeader.component';

const NotFound = props => {
  if (props.loggedIn) {
    return (
      <React.Fragment>
        <DashHeader />
        <h1>404 Page Not Found!</h1>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Header />
      <h1>404 Page Not Found!</h1>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NotFound);
