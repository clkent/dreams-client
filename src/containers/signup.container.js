import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Header from '../components/header.component';
import SignupForm from '../components/signupForm.component';

export function SignUp(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <React.Fragment>
      <Header />
      <h1>Sign Up</h1>
      <SignupForm />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignUp);
