import React from 'react';
import { clearAuth } from '../_actions/auth.action';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const DashHeader = props => {
  if (!props.loggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <header>
      <button
        onClick={() => {
          props.dispatch(clearAuth());
          localStorage.clear();
        }}
      >
        Log out
      </button>
    </header>
  );
};

function mapStateToProps(state, props) {
  console.log('CURRENT STATE:');
  console.log(state);
  return {
    loggedIn: state.auth.currentUser !== null
  };
}

export default connect(mapStateToProps)(DashHeader);
