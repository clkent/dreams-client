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
    <div className="pages secondary">
      <Header />
      <div className="box">
        <h1>Log In</h1>
        <LoginForm />
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

export default connect(mapStateToProps)(LogIn);
