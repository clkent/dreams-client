import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Header from '../_components/header.component';
import SignUpForm from '../_components/signupForm.component';

export function SignUp(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="pages secondary">
      <Header />
      <div className="box">
        <h1>Sign Up</h1>
        <SignUpForm />
      </div>
      <footer>
        <p>
          made w/ ❤ by{' '}
          <a href="https://www.instagram.com/clkent/" target="_blank">
            @clkent
          </a>
        </p>
      </footer>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignUp);
