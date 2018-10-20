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
      {/* TODO: settings link */}
      <img
        className="moon"
        alt="moon icon"
        src={require('../imgs/moon-color.png')}
      />
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

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(DashHeader);
