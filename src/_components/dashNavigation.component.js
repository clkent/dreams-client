import React from 'react';
import { clearAuth } from '../_actions/auth.action';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const DashNavigation = props => {
  if (!props.loggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <nav role="navigation">
      <div className="eyes dash-eyes">
        <div className="eye" />
        <div className="eye" />
      </div>
      <button
        onClick={() => {
          props.dispatch(clearAuth());
          localStorage.clear();
        }}
      >
        Log out
      </button>
    </nav>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(DashNavigation);
