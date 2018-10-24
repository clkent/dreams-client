import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Navigation from '../_components/navigation.component';
import LoginForm from '../_components/loginForm.component';
import Footer from '../_components/footer.component';

export function LogIn(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="pages secondary">
      <Navigation />
      <div className="box">
        <h1>Log In</h1>
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LogIn);
