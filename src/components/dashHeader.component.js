import React from 'react';
import { clearAuth } from '../actions/auth.action';
import { connect } from 'react-redux';

const DashHeader = props => (
  <header>
    <button
      onClick={() => {
        props.dispatch(clearAuth());
      }}
    >
      Log out
    </button>
  </header>
);
function mapStateToProps(state, props) {
  console.log(state);
  return {
    authToken: state.auth.authToken,
    loading: state.auth.loading,
    loggedIn: state.auth.currentUser !== null,
    error: state.auth.error
  };
}

export default connect(mapStateToProps)(DashHeader);
