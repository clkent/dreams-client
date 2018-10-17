import React from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';

import DashHeader from '../_components/dashHeader.component';

const Dashboard = () => (
  <React.Fragment>
    <DashHeader />
    <h1>Dashboard</h1>
  </React.Fragment>
);

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Dashboard);
