import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../_components/header.component';
import LoginForm from '../_components/loginForm.component';

export function LogIn(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <React.Fragment>
      <Header />
      <h1>Log In</h1>
      <LoginForm />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LogIn);
